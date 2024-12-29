import { create } from 'zustand';

import { useNuiCallback } from '@app/hooks/useNuiCallback';

export type CategoryProps = {
  id: string;
  label: string;
  icon: 'card' | 'car' | 'moto' | 'shield' | 'mechanicalTool' | string;
  description: string[];
};

export type ProductProps = {
  id: string;
  title: string;
  banner: string;
  price: number;
  benefits: string[];
};

export type ProductReward = {
  label: string;
  id: string;
  duration?: string;
  amount?: number;
};

interface ShopStore {
  categories: CategoryProps[];
  selectedCategory: CategoryProps | null;

  products: ProductProps[];

  filter: string;

  selectedProduct: ProductProps | null;
}

interface ShopActions {
  getCategories: () => Promise<void>;
  setSelectedCategory: (category: CategoryProps | null) => void;

  getProductsByCategory: (category: CategoryProps | null) => Promise<void>;

  buyProduct: (productId: string) => Promise<true | { error: string }>;

  getProductReward: (productId: string) => Promise<ProductReward[]>;

  setFilter: (value: string) => void;

  setSelectedProduct: (product: ProductProps | null) => void;
}

export const useShop = create<ShopStore & ShopActions>()((set, get) => ({
  categories: [],
  products: [],
  filter: '',

  selectedCategory: null,
  selectedProduct: null,

  getCategories: async () => {
    const resp = await useNuiCallback('getCategories', {}, [
      {
        id: '1',
        label: 'VIPS',
        icon: 'card',
        description: [
          'Veículos VIP tem duração até Wipe',
          'Não realizamos troca dos veículos',
          'Você pode testar todos os veículos na concessionária',
        ],
      },
      {
        id: '2',
        label: 'CARROS',
        icon: 'car',
        description: [
          'Veículos VIP tem duração até Wipe',
          'Não realizamos troca dos veículos',
          'Você pode testar todos os veículos na concessionária',
        ],
      },
      {
        id: '3',
        label: 'MOTOS',
        icon: 'moto',
        description: [
          'Veículos VIP tem duração até Wipe',
          'Não realizamos troca dos veículos',
          'Você pode testar todos os veículos na concessionária',
        ],
      },
      {
        id: '4',
        label: 'EXCLUSIVOS',
        icon: 'car',
        description: [
          'Veículos VIP tem duração até Wipe',
          'Não realizamos troca dos veículos',
          'Você pode testar todos os veículos na concessionária',
        ],
      },
      {
        id: '5',
        label: 'BLINDADOS',
        icon: 'shield',
        description: [
          'Veículos VIP tem duração até Wipe',
          'Não realizamos troca dos veículos',
          'Você pode testar todos os veículos na concessionária',
        ],
      },
      {
        id: '6',
        label: 'EXTRAS',
        icon: 'mechanicalTool',
        description: [
          'Veículos VIP tem duração até Wipe',
          'Não realizamos troca dos veículos',
          'Você pode testar todos os veículos na concessionária',
        ],
      },
    ]);

    if (resp) {
      set({ categories: resp });

      resp.length > 0 && get().setSelectedCategory(resp[0]);
    }
  },

  setSelectedCategory: (category) => {
    set({ selectedCategory: category });
  },

  getProductsByCategory: async (category) => {
    if (category === null) return;

    const resp = await useNuiCallback(
      'getProductsByCategory',
      {
        categoryId: category.id,
      },
      [
        {
          id: '1',
          title: 'VIP CORNO',
          banner: 'https://example.com/images/vip-corno-banner.png',
          price: 129.9,
          benefits: [
            'Tag personalizada no Discord',
            'Salário de R$4000 a cada 60 minutos (30 dias)',
            '1 veículo VIP (30 dias)',
            'Saldo inicial com 20.000',
            'MetaCoins 300 (Usado para comprar skins e box)',
            'Apenas os veículos permanentes ficam com o jogador até que a cidade sofra WIPE/RESET',
            'Não esqueça de testar os carros antes de comprar',
            'Caso ainda tenha dúvidas, estamos à disposição para ajudar',
            'MetaCoins 300 (Usado para comprar skins e box)',
            'Apenas os veículos permanentes ficam com o jogador até que a cidade sofra WIPE/RESET',
            'Não esqueça de testar os carros antes de comprar',
            'Caso ainda tenha dúvidas, estamos à disposição para ajudar',
            'MetaCoins 300 (Usado para comprar skins e box)',
            'Apenas os veículos permanentes ficam com o jogador até que a cidade sofra WIPE/RESET',
            'Não esqueça de testar os carros antes de comprar',
            'Caso ainda tenha dúvidas, estamos à disposição para ajudar',
          ],
        },
        {
          id: '2',
          title: 'FORD RS',
          banner: 'https://example.com/images/ford-rs-banner.png',
          price: 129.9,
          benefits: [
            'Tag personalizada no Discord',
            'Salário de R$4000 a cada 60 minutos (30 dias)',
            '1 veículo VIP (30 dias)',
            'Saldo inicial com 20.000',
            'MetaCoins 300 (Usado para comprar skins e box)',
            'Apenas os veículos permanentes ficam com o jogador até que a cidade sofra WIPE/RESET',
            'Não esqueça de testar os carros antes de comprar',
            'Caso ainda tenha dúvidas, estamos à disposição para ajudar',
          ],
        },
        {
          id: '3',
          title: 'LAMBORGHINI AVENTADOR',
          banner: 'https://example.com/images/lamborghini-aventador.png',
          price: 399.9,
          benefits: [
            'Carro exclusivo para membros VIP',
            'Velocidade máxima aumentada em 20%',
            'MetaCoins 500 para skins e customizações',
            'Acesso antecipado a novos eventos',
            'Disponível por 60 dias',
          ],
        },
        {
          id: '4',
          title: 'SUPERCARRO VIP',
          banner: 'https://example.com/images/supercarro-vip.png',
          price: 299.9,
          benefits: [
            'Carro exclusivo de edição limitada',
            'MetaCoins 350 para personalização',
            'Aumento de velocidade e desempenho',
            'Disponível para uso por 30 dias',
          ],
        },
        {
          id: '5',
          title: 'PACOTE OFF-ROAD',
          banner: 'https://example.com/images/pacote-offroad.png',
          price: 199.9,
          benefits: [
            'Inclui 3 veículos off-road',
            'MetaCoins 250 para personalização',
            'Desempenho aprimorado para terrenos difíceis',
            'Disponível por 45 dias',
          ],
        },
        {
          id: '6',
          title: 'CAMINHONETE VIP',
          banner: 'https://example.com/images/caminhonete-vip.png',
          price: 159.9,
          benefits: [
            'Caminhonete personalizada com pintura especial',
            'Capacidade de carga aumentada',
            'MetaCoins 200 para customização',
            'Disponível por 30 dias',
          ],
        },
        {
          id: '7',
          title: 'PACOTE CLÁSSICOS',
          banner: 'https://example.com/images/pacote-classicos.png',
          price: 249.9,
          benefits: [
            '3 veículos clássicos exclusivos',
            'MetaCoins 300 para skins vintage',
            'Acesso VIP a eventos de carros clássicos',
            'Disponível por 60 dias',
          ],
        },
        {
          id: '8',
          title: 'SUV BLINDADO',
          banner: 'https://example.com/images/suv-blindado.png',
          price: 189.9,
          benefits: [
            'SUV com proteção blindada nível 5',
            'Maior durabilidade contra impactos',
            'MetaCoins 150 para personalização',
            'Disponível por 30 dias',
          ],
        },
        {
          id: '9',
          title: 'MOTO VIP',
          banner: 'https://example.com/images/moto-vip.png',
          price: 129.9,
          benefits: [
            'Moto exclusiva com pintura neon',
            'MetaCoins 200 para upgrades',
            'Velocidade máxima aumentada',
            'Disponível por 30 dias',
          ],
        },
        {
          id: '10',
          title: 'PACOTE DE LUXO',
          banner: 'https://example.com/images/pacote-de-luxo.png',
          price: 499.9,
          benefits: [
            'Inclui 5 veículos de luxo',
            'MetaCoins 1000 para customizações',
            'Acesso antecipado a novos conteúdos',
            'Disponível por 90 dias',
          ],
        },
        {
          id: '11',
          title: 'JETPACK VIP',
          banner: 'https://example.com/images/jetpack-vip.png',
          price: 259.9,
          benefits: [
            'Equipamento exclusivo para membros VIP',
            'Voos mais rápidos e eficientes',
            'MetaCoins 400 para upgrades',
            'Disponível por 45 dias',
          ],
        },
        {
          id: '12',
          title: 'PACOTE PREMIUM',
          banner: 'https://example.com/images/pacote-premium.png',
          price: 599.9,
          benefits: [
            'Inclui 8 veículos premium exclusivos',
            'MetaCoins 2000 para personalização',
            'Acesso VIP ilimitado a eventos',
            'Disponível por 120 dias',
          ],
        },
      ],
    );

    if (resp) {
      set({ products: resp });
    }
  },

  buyProduct: async (productId) => {
    const resp = await useNuiCallback<true | { error: string }>(
      'buyProduct',
      { productId },
      true,
    );

    return resp;
  },

  getProductReward: async (productId) => {
    const resp = await useNuiCallback<ProductReward[]>(
      'getProductReward',
      { productId },
      [
        {
          id: '1',
          label: 'G63',
          amount: 3,
        },
        {
          id: '2',
          label: 'AMG GT63S 15 dias',
          duration: '15 Dias',
        },
      ],
    );

    return resp;
  },

  setFilter: (value) => {
    set({ filter: value });
  },

  setSelectedProduct: (product) => {
    set({ selectedProduct: product });
  },
}));
