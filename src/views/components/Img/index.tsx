type OptimizedSrc = {
  avif?: string;
  webp?: string;
  fallback: string;
};

type ImgProps = React.HTMLAttributes<HTMLImageElement> & {
  src: OptimizedSrc | string;
  alt?: string;
};

export function Img({ src, alt = '' }: ImgProps) {
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
      <img src={sources.fallback} alt={alt} />
    </picture>
  );
}
