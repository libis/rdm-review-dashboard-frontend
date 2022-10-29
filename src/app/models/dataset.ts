import Status = Dataset.Status;
import {Data} from "@angular/router";

export interface Dataset {
  doi: string;
  title: string;
  author: string;
status: Status;
}

export namespace Dataset
{
  export enum Status
  {
    Submitted,
    InReview  ,
    Returned
  }

  export function statusString(dataset: Dataset): string {
    switch (dataset.status) {
      case Dataset.Status.InReview: return 'In Review';
      case Dataset.Status.Returned: return 'Returned to author';
      case Dataset.Status.Submitted: return 'Submitted for review';
    }
    return '';
  }

  export function assignText(dataset: Dataset): string {
  return dataset.status == Status.Submitted ? 'Assign' : 'Unassign';
}

}

export const DEFAULT_DATASET = {
  doi: '',
  title: '',
  author: '',
  status: Dataset.Status.Submitted
}

