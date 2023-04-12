const { ProductType } = require("../models/product");
const products = require("../data/products-data");

function calculateAnnualCost(consumption) {
    const tariffs = [];
    console.log(Object.entries(products));
  
    for (const [key, product] of Object.entries(products)) {
        console.log('key', key, product);
  
      switch (product.type) {
        case ProductType.BASIC_ELECTRICITY_TARIFF:
            console.log('A',product)
          annualCost = product.baseCost * 12 + consumption * product.additionalKwhCost * 0.01;
          break;
        case ProductType.PACKAGED_TARIFF:
            console.log('B',product)
          if (consumption <= product.includedKwh) {
            annualCost = product.baseCost;
          } else {
            annualCost = product.baseCost + (consumption - product.includedKwh) * product.additionalKwhCost * 0.01;
          }
          break;
        default:
          throw new Error(`Unknown product type: ${value}`);
      }
  
      tariffs.push({
        ...product,
        annualCost: annualCost.toFixed(2),
      });
    }
  
    console.log(tariffs);
    return tariffs;
  }

module.exports = calculateAnnualCost;
