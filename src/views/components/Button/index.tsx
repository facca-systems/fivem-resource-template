import { animated, AnimatedProps } from '@react-spring/web';
import useSound from 'use-sound';

import ClickSound from '@views/assets/sounds/click.wav';
import HoverSound from '@views/assets/sounds/hover.wav';

export function Button(
  props: AnimatedProps<React.ButtonHTMLAttributes<HTMLButtonElement>>,
) {
  const [playHoverSound] = useSound(HoverSound, { volume: 0.07 });
  const [playClickSound] = useSound(ClickSound, { volume: 0.07 });

  return (
    <animated.button
      {...props}
      onMouseEnter={() => playHoverSound()}
      onClick={(e) => {
        playClickSound();
        props.onClick && props.onClick(e);
      }}
      type="button"
    />
  );
}
