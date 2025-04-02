export const ColorVariants = {
  pink: '#ff95b7',
  yellow: '#ffcf30',
  green: '#3df76e',
  cyan: '#39eaff',
  lavender: '#edb4ff',
  magenta: '#ff90ed',
  gray: '#c5c5c5',
  FACCA: {
    primaryColor: '188, 132, 237',
    secondaryColor: '61, 5, 110',
    thirdyColor: '143, 75, 201',
  },
};

function hexToRgb(hex: string): string {
  const bigint = Number.parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `${r},${g},${b}`;
}

function setColors(
  primaryColor: string,
  secondaryColor: string,
  thirdyColor: string,
) {
  document.documentElement.style.setProperty(
    '--primaryColor',
    hexToRgb(primaryColor),
  );
  document.documentElement.style.setProperty(
    '--secondaryColor',
    hexToRgb(secondaryColor),
  );
  document.documentElement.style.setProperty(
    '--thirdyColor',
    hexToRgb(thirdyColor),
  );
}

export function attributeColorsToHTML(
  color:
    | { primaryColor: string; secondaryColor: string; thirdyColor: string }
    | keyof typeof ColorVariants,
) {
  if (typeof color === 'string') {
    const variant = ColorVariants[color];
    if (!variant) return;

    const primaryColor =
      typeof variant === 'string' ? variant : variant.primaryColor;
    const secondaryColor =
      typeof variant === 'string' ? variant : variant.secondaryColor;
    const thirdyColor =
      typeof variant === 'string' ? variant : variant.thirdyColor;

    setColors(primaryColor, secondaryColor, thirdyColor);
    return;
  }

  if (
    typeof color === 'object' &&
    color.primaryColor &&
    color.secondaryColor &&
    color.thirdyColor
  ) {
    setColors(color.primaryColor, color.secondaryColor, color.thirdyColor);
  }
}
