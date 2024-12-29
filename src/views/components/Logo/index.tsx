import LogoImage from '@views/assets/svgs/facca-systems-icon.svg';

export function Logo() {
  return (
    <img
      src={LogoImage}
      className="size-[5rem] mt-6 object-contain"
      alt="facca-systems"
    />
  );
}
