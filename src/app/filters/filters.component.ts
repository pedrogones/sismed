import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {
  currentFilter: string | null = null;

  setFilter(filter: string): void {
    this.currentFilter = filter;
  }

  clearFilters(): void {
    this.currentFilter = null;
  }
}
