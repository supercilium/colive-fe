import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Apartment, Task } from '../apartment';
import { FLATS } from 'src/mocks/flats';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  apartment: Apartment = FLATS[0];

  statusColors: Record<Task['status'], string> = {
    New: 'primary',
    Canceled: '',
    Done: 'accent',
  };
}
