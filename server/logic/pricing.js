const ProductType = require('../models/product').ProductType;

function calculateAnnualCost(productType, consumption) {
    let baseCosts = 0;
    let additionalKwhCost = 0;
  
    switch (productType) {
      case ProductType.BASIC_ELECTRICITY_TARIFF:
        baseCosts = 5;
        additionalKwhCost = 0.22;
        break;
      case ProductType.PACKAGED_TARIFF:
        if (consumption <= 4000) {
          baseCosts = 800;
        } else {
          baseCosts = 800 + (consumption - 4000) * 0.3;
        }
        break;
      default:
        throw new Error(`Unknown product type: ${productType}`);
    }
  
    const annualCost = baseCosts * 12 + consumption * additionalKwhCost;
    return annualCost;
  }
  
  module.exports = {
    ProductType,
    calculateAnnualCost
  };