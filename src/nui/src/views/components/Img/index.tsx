import { ClassValue } from 'clsx';

import { cn } from '@app/utils';

type OptimizedSrc = {
  avif?: string;
  webp?: string;
  fallback: string;
};

type ImgProps = React.HTMLAttributes<HTMLImageElement> & {
  src: OptimizedSrc | string;
  className?: ClassValue;
  alt?: string;
};

export function Img({ src, alt = '', className }: ImgProps) {
  const getSource = (source: OptimizedSrc | string): OptimizedSrc => {
    if (typeof source === 'string') {
      return { fallback: source };
    }
    return source;
  };

  const sources = getSource(src);

  return (
    <picture>
      {sources.avif && <source srcSet={sources.avif} type="image/avif" />}
      {sources.webp && <source srcSet={sources.webp} type="image/webp" />}
      <img src={sources.fallback} alt={alt} className={cn(className)} />
    </picture>
  );
}
