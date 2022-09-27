type Color = {
	r: number
	g: number
	b: number
}

export const convertRgbToHex = ({ r, g, b }: Color) => {
  const hex = [r, g, b]
    .map(x => {
      return x.toString(16).padStart(2, '0')
    })
    .join('')
  return `#${hex}`
}
