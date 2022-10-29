import { Component, OnInit } from '@angular/core';
import {DatasetService} from "../services/dataset.service";
import {Dataset} from "../models/dataset";
import {map, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-dataset-detail',
  templateUrl: './dataset-detail.component.html',
  styleUrls: ['./dataset-detail.component.scss']
})
export class DatasetDetailComponent implements OnInit {

  dataset$: Observable<Dataset>;

  constructor(private datasetService: DatasetService) {
    this.dataset$ = this.datasetService.getSelectedDataset()
  }

  ngOnInit(): void {
  }

  avatarLabel(): Observable<string> {
    return this.dataset$.pipe(map(ds => ds.author.charAt(0).toUpperCase()));
  }

  statusString(): Observable<string> {
    return this.dataset$.pipe(map(ds => Dataset.statusString(ds)));
  }

  assignButtonText(): Observable<string> {
    return this.dataset$.pipe(map(ds => Dataset.assignText(ds)));
  }

}
