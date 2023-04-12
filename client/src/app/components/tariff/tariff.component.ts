import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TariffService } from 'src/app/services/tariff.service';

@Component({
  selector: 'app-tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.scss']
})
export class TariffComponent implements OnInit {

  consumptionForm!: FormGroup;
  consumption!: number;
  tariffs!: any[];

  constructor(
    private fb: FormBuilder,
    private tariffService: TariffService
  ) { }

  ngOnInit(): void {
    this.consumptionForm = this.fb.group({
      consumption: ''
    });
  }

  onSubmit(): void {
    this.consumption = this.consumptionForm?.value.consumption;
    this.getTariffs();
  }

  private getTariffs(): void {
    this.tariffService.getTariffs(this.consumption)
      .subscribe(
        tariffs => {
          this.tariffs = tariffs;
        },
        error => {
          console.log(error);
        }
      );
  }

}
