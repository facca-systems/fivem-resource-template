import { useEffect, useState } from "react";

function isImgValid(url: string): Promise<boolean> {
	const img = new Image();
	img.src = url;
	return new Promise((resolve) => {
		img.onerror = () => resolve(false);
		img.onload = () => resolve(true);
	});
}

export const useImageValidation = (imageUrl: string) => {
	const [isImageValid, setIsImageValid] = useState(true);

	useEffect(() => {
		const validateImage = async () => {
			try {
				const isValid = await isImgValid(imageUrl);
				setIsImageValid(isValid);
			} catch (error) {
				console.error("Error validating image:", error);
				setIsImageValid(false);
			}
		};

		validateImage();
	}, [imageUrl]);

	return { isImageValid, imageUrl };
};
