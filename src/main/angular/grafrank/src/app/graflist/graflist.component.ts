import {Component} from '@angular/core';
import {Graf} from '../model/Graf';
import {GrafService} from '../service/graf.service';
import {GRAFS} from '../model/mock-graf';

@Component({
  selector: 'app-graflist',
  templateUrl: './graflist.component.html',
  styleUrls: ['./graflist.component.sass'],
})

export class GraflistComponent {
  grafs = GRAFS;
  selectedGraf?: Graf;

  constructor(private grafService: GrafService) { }

  ngOnInit(): void {
    this.getGrafs();
  }

  getGrafs(): void {
    this.grafService.getHeroes()
      .subscribe(grafs => this.grafs = grafs);
  }

  onSelect(graf: Graf): void {
    this.selectedGraf = graf;
  }
}
