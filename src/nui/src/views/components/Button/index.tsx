import clsx from 'clsx';
import useSound from 'use-sound';

import ClickSound from '@views/assets/sounds/click.mp3';

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const [playClickSound] = useSound(ClickSound, { volume: 0.07 });

  return (
    <button
      {...props}
      onClick={(e) => {
        playClickSound();
        props.onClick && props.onClick(e);
      }}
      className={clsx(
        'transition-all duration-400 will-change-transform active:scale-100 hover:scale-105 ',
        props.className,
      )}
      type="button"
    />
  );
}
