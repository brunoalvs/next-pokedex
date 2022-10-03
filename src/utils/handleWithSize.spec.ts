import {decimetresToMeters, hectogramToKg} from './handleWithSize';

describe('handle with sizes:', () => {

  describe('decimetresToMeters:', () => {
    it('should convert decimetres to meters', () => {
      const decimetres = 100;
      const meters = '10m';

      expect(decimetresToMeters(decimetres)).toBe(meters);
    });
  });

  describe('hectogramToKg:', () => {
    it('should convert hectogram to kg', () => {
      const hectogram = 100;
      const kg = '10kg';

      expect(hectogramToKg(hectogram)).toBe(kg);
    });
  });
})
