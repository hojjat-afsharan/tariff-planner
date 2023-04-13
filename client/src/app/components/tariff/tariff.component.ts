import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { TariffService } from 'src/app/services/tariff.service';

@Component({
  selector: 'app-tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.scss'],
})
export class TariffComponent implements OnInit {
  consumptionForm!: FormGroup;
  consumption!: number;
public readonly maxConsumption = 1000000;

  products$ = this.tariffService.products$.pipe(
    filter((products) => !!products)
  );

  constructor(private fb: FormBuilder, private tariffService: TariffService) {}

  ngOnInit(): void {
    this.consumptionForm = this.fb.group({
      consumption: [
        '1000', [Validators.required, Validators.min(0), Validators.max(this.maxConsumption)]
      ],
    });
  }

  onSubmit(): void {
    this.consumption = this.consumptionForm?.value.consumption;
    this.tariffService.getProducts(this.consumption);
  }
}
