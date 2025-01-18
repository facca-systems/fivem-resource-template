import { useEffect, useState } from 'react';

import { isImgValid } from '@app/utils/misc';

const useImageValidation = (imageUrl: string) => {
  const [isImageValid, setIsImageValid] = useState(false);

  useEffect(() => {
    const validateImage = async () => {
      try {
        const isValid = await isImgValid(imageUrl);
        setIsImageValid(isValid);
      } catch (error) {
        console.error('Error validating image:', error);
        setIsImageValid(false);
      }
    };

    validateImage();
  }, [imageUrl]);

  return { isImageValid, imageUrl };
};

export default useImageValidation;
