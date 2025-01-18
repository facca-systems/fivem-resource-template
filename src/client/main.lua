function ToggleUI(isOpen)
	SetNuiFocus(isOpen, isOpen)
	SendNUIMessage({ action = 'setVisible', payload = isOpen })
end

AddToastify = function(type, text, duration, position)
	local data = {
		type = "sucess", -- success || error
		text = "meu texto falando sla oq",
		duration = "sucess", -- duração em milisegundos
		position = {
			yAxis = "top", -- "top | center | bottom"
			xAxis = "right" -- "right | left | center"
		},
		theme = "light" -- "dark" | "light"
	}

	SendNUIMessage({ action = 'addToastify', payload = data })
end

RegisterNuiCallback('hideFrame', function(_, cb)
	if SetNuiFocus(false, false) then
		return cb(true)
	end

	return cb(false)
end)


---@alias ColorType
---| '"pink"'       # A string literal "pink"
---| '"yellow"'     # A string literal "yellow"
---| '"green"'      # A string literal "green"
---| '"cyan"'       # A string literal "cyan"
---| '"lavender"'   # A string literal "lavender"
---| '"magenta"'    # A string literal "magenta"
---| '"gray"'       # A string literal "gray"
---| '"FACCA"'       # A string literal "NEXT"
---| { primaryColor: string, secondaryColor: string } # A table with primaryColor and secondaryColor

---@param color ColorType # A variável "color" segue o tipo definido acima
RegisterNuiCallback('getColors', function(_, cb)
	cb(Config.Colors.Theme)
end)

RegisterCommand('openUI', function()
	ToggleUI(true)
end, false)

RegisterNuiCallback('getPanelBaseInfo', function(_, cb)
	local data = {
		player = {
			name = 'Miguel Facca',
			id = 1285,
			avatar = 'https://github.com/miguel-facca.png',
		},
		headerBanner = '',

		logos = { topNavbar = '', bottomNavbar = '' },
	}

	cb(data)
end)

RegisterNuiCallback('getCategories', function(_, data, cb)
	local categories = {
		{
			id = "1",
			label = "VIPS",
			icon = "card",
			description = "Seção dedicada a itens exclusivos e serviços VIP.",
		},
		{
			id = "2",
			label = "CARROS",
			icon = "car",
			description = "Encontre carros premium, esportivos e utilitários.",
		},
		{
			id = "3",
			label = "MOTOS",
			icon = "moto",
			description = "Seleção de motocicletas de alta performance.",
		},
		{
			id = "4",
			label = "EXCLUSIVOS",
			icon = "car",
			description = "Modelos únicos e edições limitadas.",
		},
		{
			id = "5",
			label = "BLINDADOS",
			icon = "shield",
			description = "Veículos com proteção blindada para maior segurança.",
		},
		{
			id = "6",
			label = "EXTRAS",
			icon = "mechanicalTool",
			description = "Acessórios, serviços adicionais e personalizações.",
		},
	}

	cb(categories or {})
end)


RegisterNuiCallback('getProductsByCategory', function(_, data, cb)
	local products = {
		{
			id = "1",
			title = "VIP CORNO",
			banner = "https://example.com/images/vip-corno-banner.png",
			price = 129.9,
			benefits = {
				"Tag personalizada no Discord",
				"Salário de R$4000 a cada 60 minutos (30 dias)",
				"1 veículo VIP (30 dias)",
				"Saldo inicial com 20.000",
				"MetaCoins 300 (Usado para comprar skins e box)",
				"Apenas os veículos permanentes ficam com o jogador até que a cidade sofra WIPE/RESET",
				"Não esqueça de testar os carros antes de comprar",
				"Caso ainda tenha dúvidas, estamos à disposição para ajudar",
			},
		},
		{
			id = "2",
			title = "FORD RS",
			banner = "https://example.com/images/ford-rs-banner.png",
			price = 129.9,
			benefits = {
				"Tag personalizada no Discord",
				"Salário de R$4000 a cada 60 minutos (30 dias)",
				"1 veículo VIP (30 dias)",
				"Saldo inicial com 20.000",
				"MetaCoins 300 (Usado para comprar skins e box)",
				"Apenas os veículos permanentes ficam com o jogador até que a cidade sofra WIPE/RESET",
				"Não esqueça de testar os carros antes de comprar",
				"Caso ainda tenha dúvidas, estamos à disposição para ajudar",
			},
		},
		{
			id = "3",
			title = "LAMBORGHINI AVENTADOR",
			banner = "https://example.com/images/lamborghini-aventador.png",
			price = 399.9,
			benefits = {
				"Carro exclusivo para membros VIP",
				"Velocidade máxima aumentada em 20%",
				"MetaCoins 500 para skins e customizações",
				"Acesso antecipado a novos eventos",
				"Disponível por 60 dias",
			},
		},
		{
			id = "4",
			title = "SUPERCARRO VIP",
			banner = "https://example.com/images/supercarro-vip.png",
			price = 299.9,
			benefits = {
				"Carro exclusivo de edição limitada",
				"MetaCoins 350 para personalização",
				"Aumento de velocidade e desempenho",
				"Disponível para uso por 30 dias",
			},
		},
		{
			id = "5",
			title = "PACOTE OFF-ROAD",
			banner = "https://example.com/images/pacote-offroad.png",
			price = 199.9,
			benefits = {
				"Inclui 3 veículos off-road",
				"MetaCoins 250 para personalização",
				"Desempenho aprimorado para terrenos difíceis",
				"Disponível por 45 dias",
			},
		},
		{
			id = "6",
			title = "CAMINHONETE VIP",
			banner = "https://example.com/images/caminhonete-vip.png",
			price = 159.9,
			benefits = {
				"Caminhonete personalizada com pintura especial",
				"Capacidade de carga aumentada",
				"MetaCoins 200 para customização",
				"Disponível por 30 dias",
			},
		},
		{
			id = "7",
			title = "PACOTE CLÁSSICOS",
			banner = "https://example.com/images/pacote-classicos.png",
			price = 249.9,
			benefits = {
				"3 veículos clássicos exclusivos",
				"MetaCoins 300 para skins vintage",
				"Acesso VIP a eventos de carros clássicos",
				"Disponível por 60 dias",
			},
		},
		{
			id = "8",
			title = "SUV BLINDADO",
			banner = "https://example.com/images/suv-blindado.png",
			price = 189.9,
			benefits = {
				"SUV com proteção blindada nível 5",
				"Maior durabilidade contra impactos",
				"MetaCoins 150 para personalização",
				"Disponível por 30 dias",
			},
		},
		{
			id = "9",
			title = "MOTO VIP",
			banner = "https://example.com/images/moto-vip.png",
			price = 129.9,
			benefits = {
				"Moto exclusiva com pintura neon",
				"MetaCoins 200 para upgrades",
				"Velocidade máxima aumentada",
				"Disponível por 30 dias",
			},
		},
		{
			id = "10",
			title = "PACOTE DE LUXO",
			banner = "https://example.com/images/pacote-de-luxo.png",
			price = 499.9,
			benefits = {
				"Inclui 5 veículos de luxo",
				"MetaCoins 1000 para customizações",
				"Acesso antecipado a novos conteúdos",
				"Disponível por 90 dias",
			},
		},
		{
			id = "11",
			title = "JETPACK VIP",
			banner = "https://example.com/images/jetpack-vip.png",
			price = 259.9,
			benefits = {
				"Equipamento exclusivo para membros VIP",
				"Voos mais rápidos e eficientes",
				"MetaCoins 400 para upgrades",
				"Disponível por 45 dias",
			},
		},
		{
			id = "12",
			title = "PACOTE PREMIUM",
			banner = "https://example.com/images/pacote-premium.png",
			price = 599.9,
			benefits = {
				"Inclui 8 veículos premium exclusivos",
				"MetaCoins 2000 para personalização",
				"Acesso VIP ilimitado a eventos",
				"Disponível por 120 dias",
			},
		},
	}

	cb(products or {})
end)

RegisterNuiCallback('buyProduct', function(_, data, cb)
	local productId = data.productId;

	cb(true) -- ou {error: "mensagme de erro exemplo estoque insuficiente"}
end)

RegisterNuiCallback('getProductRewards', function(data, cb)
	local productId = data.productId
	local rewards   = {
		{
			id = "1",
			label = "G63",
			amount = 3,
		},
		{
			id = "2",
			label = "AMG GT63S 15 dias",
			duration = "15 Dias",
		},
	}

	cb(rewards)
end)
