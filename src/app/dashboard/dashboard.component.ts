import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion;
}
