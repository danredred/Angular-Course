import { Component, computed, inject} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-invesment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './invesment-results.component.html',
  styleUrl: './invesment-results.component.css',
})
export class InvesmentResultsComponent {
  private investmentService = inject(InvestmentService);

  results =this.investmentService.resultsData.asReadonly();
}
