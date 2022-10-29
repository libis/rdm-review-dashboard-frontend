import { Component, OnInit } from '@angular/core';
import {DatasetService} from "../services/dataset.service";
import {Observable} from "rxjs";
import {Dataset} from "../models/dataset";

@Component({
  selector: 'app-selection-list',
  templateUrl: './selection-list.component.html',
  styleUrls: ['./selection-list.component.scss']
})
export class SelectionListComponent implements OnInit {

  datasets$: Observable<Dataset[]>;
  constructor(private datasetService: DatasetService) {
    this.datasets$ = this.datasetService.datasets$;
  }

  ngOnInit(): void {
  }

}
