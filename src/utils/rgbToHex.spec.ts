import { convertRgbToHex } from './rgbToHex';

describe('convertRgbToHex:', () => {
  it('should convert rgb to hex', () => {
    const rgb = { r: 255, g: 255, b: 255 }
    const hex = '#ffffff'

    expect(convertRgbToHex(rgb)).toBe(hex);
  });
})
