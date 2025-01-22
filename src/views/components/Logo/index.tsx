import LogoImage from "@views/assets/images/logos/sf-facca6.png";

export function Logo() {
	return (
		<img
			src={LogoImage}
			className="size-[11rem] self-center object-contain"
			alt="facca-systems"
		/>
	);
}
