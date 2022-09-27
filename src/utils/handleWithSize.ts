const decimetresToMeters = (decimetres: number) => {
  const meters = decimetres / 10;
  return `${meters}m`;
}

const hectogramToKg = (hectogram: number) => {
  const kg = hectogram / 10;
  return `${kg}kg`;
};

export { decimetresToMeters, hectogramToKg }
