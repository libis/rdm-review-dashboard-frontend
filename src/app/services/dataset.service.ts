import { Injectable } from '@angular/core';
import {Dataset, DEFAULT_DATASET} from "../models/dataset";
import {ApiService} from "./api.service";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  datasets$: Observable<Dataset[]>;

  selected: string = '';

  constructor(private apiService: ApiService) {
    this.datasets$ = apiService.getDatasets();
  }

  selectDataset(dataset: Dataset) {
    this.selected = dataset.doi;
  }

  getSelectedDataset(): Observable<Dataset> {
    return this.datasets$.pipe(map(dslist => dslist.find(ds => ds.doi === this.selected) || dslist[0]));
  }

}
