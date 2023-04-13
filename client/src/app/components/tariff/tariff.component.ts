import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, filter } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { TariffService } from 'src/app/services/tariff.service';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.scss'],
})
export class TariffComponent implements OnInit, OnDestroy {
  consumptionForm!: FormGroup;
  consumption!: number;
  isSmallScreen = false;
  public readonly maxConsumption = 1000000;
  private breakpointSubscription = new Subscription();

  products$ = this.tariffService.products$.pipe(
    filter((products) => !!products)
  );

  constructor(private fb: FormBuilder,
    private tariffService: TariffService,
    private breakpointObserver: BreakpointObserver
    ) { }

  ngOnInit(): void {
    this.consumptionForm = this.fb.group({
      consumption: [
        '1000', [Validators.required, Validators.min(0), Validators.max(this.maxConsumption)]
      ],
    });

    this.breakpointSubscription = this.breakpointObserver.observe(['(max-width: 599px)']).subscribe(state => {
      this.isSmallScreen = state.matches;
    });
  }

  onSubmit(): void {
    this.consumption = this.consumptionForm?.value.consumption;
    this.tariffService.getProducts(this.consumption);
  }

  ngOnDestroy(): void {
    this.breakpointSubscription.unsubscribe();
  }
}
