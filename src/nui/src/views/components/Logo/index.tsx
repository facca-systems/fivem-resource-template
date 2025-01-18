import LogoImage from '@views/assets/images/logos/sf-facca6.png?optimized';

import { Img } from '../Img';

export function Logo() {
  return (
    <Img
      src={LogoImage}
      className="size-[11rem] self-center object-contain"
      alt="facca-systems"
    />
  );
}
