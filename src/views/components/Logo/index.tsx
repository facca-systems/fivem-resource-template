import LogoImage from '@views/assets/images/logos/faccasystems.png?optimized';

import { Img } from '../Img';

export function Logo() {
  return (
    <Img
      src={LogoImage}
      className="size-[15.625rem] object-contain"
      alt="facca-systems"
    />
  );
}
