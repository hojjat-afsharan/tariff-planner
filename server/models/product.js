const ProductType = {
    BASIC_ELECTRICITY_TARIFF: 1,
    PACKAGED_TARIFF: 2
  };

class Product {
    constructor(name, type, baseCost, additionalKwhCost, includedKwh = null) {
      this.name = name
      this.type = type
      this.baseCost = baseCost
      this.additionalKwhCost = additionalKwhCost
      this.includedKwh = includedKwh

      switch (this.type) {
        case ProductType.BASIC_ELECTRICITY_TARIFF:
          this.calculationModel = 'Basic electricity tariff';
          break;
        case ProductType.PACKAGED_TARIFF:
          this.calculationModel = 'Packaged tariff';
          break;
        default:
          throw new Error('Invalid product type');
      }
    }
  }
  
  module.exports = {Product, ProductType}