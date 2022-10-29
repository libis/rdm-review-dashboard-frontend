import {Component, Input, OnInit} from '@angular/core';
import {Dataset} from "../models/dataset";
import Status = Dataset.Status;
import {Router} from "@angular/router";
import {DatasetService} from "../services/dataset.service";

@Component({
  selector: 'div[app-selection-item]',
  templateUrl: './selection-item.component.html',
  styleUrls: ['./selection-item.component.scss']
})
export class SelectionItemComponent implements OnInit {

  @Input() dataset!: Dataset;

  constructor(private router: Router, private datasetService: DatasetService) { }

  ngOnInit(): void {
  }

  statusString(): string {
    return Dataset.statusString(this.dataset);
  }

  assignButtonText(): string {
    return Dataset.assignText(this.dataset);
  }

  viewDataset() {
    this.datasetService.selectDataset(this.dataset);
    this.router.navigate(["/detail"]).then();
  }

  assignToggle() {
    // TODO
  }
}
