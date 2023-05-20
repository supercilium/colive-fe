import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Apartment } from '../apartment';
import { FLATS } from 'src/mocks/flats';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css'],
})
export class ApartmentComponent implements OnInit {
  id: string | null;
  @Input() apartment!: Partial<Apartment>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this.apartment =
        (this.id && FLATS.find(({ id }) => Number(this.id) === +id)) || {};
    });
  }
}
