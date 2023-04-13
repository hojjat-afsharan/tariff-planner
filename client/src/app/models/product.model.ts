export class ProductDTO {
  public name: string;
  public type: number;
  public baseCost: number;
  public additionalKwhCost: number;
  public includedKwh?: number;
  public calculationModel: string;
  public annualCost: string;

  constructor(productDTO: ProductDTO) {
    this.name = productDTO.name;
    this.type = productDTO.type;
    this.baseCost = productDTO.baseCost;
    this.additionalKwhCost = productDTO.additionalKwhCost;
    this.includedKwh = productDTO.includedKwh;
    this.calculationModel = productDTO.calculationModel;
    this.annualCost = productDTO.annualCost;
    console.log('ProductDTO', productDTO);
  }
}

export class Product extends ProductDTO {

  public cost: number;
  public calculationMode: CalculationMode;
  constructor(productDTO: ProductDTO) {
    super(productDTO);
    this.cost = productDTO.annualCost ? parseFloat(productDTO.annualCost) : 0;
    this.calculationMode = productDTO.calculationModel as CalculationMode;
  }

}

export enum CalculationMode {
  BASIC_ELECTRITCITY_TARIFF = 'Basic electricity tariff',
  PACKAGED_TARIFF = 'Packaged tariff'
}
