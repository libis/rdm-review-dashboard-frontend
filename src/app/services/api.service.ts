import {Injectable} from '@angular/core';
import {from, Observable} from "rxjs";
import {Dataset} from "../models/dataset";
import {LoremIpsum} from "lorem-ipsum";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private lipsum: LoremIpsum;

  constructor() {
    this.lipsum = new LoremIpsum({
      wordsPerSentence: {min: 8, max: 28}
    });
  }

  getDatasets(): Observable<Dataset[]> {
    let datasets = [];
    for (let i = 0; i < 20; i++) {
      datasets.push(
        {
          doi: `https://doi.org/10.000/${this.lipsum.generateWords(1)}`,
          title: this.lipsum.generateSentences(1),
          // author: this.lorem.generateWords(2).replace(/(^\w|\s\w)/g, m => m.toUpperCase()),
          author: `${this.lipsum.generateWords(1)}, ${this.lipsum.generateWords(1)}`.replace(/(^\w|\s\w)/g, m => m.toUpperCase()),
          status: Math.floor(Math.random() * 3)
        }
      );
    }
    return from([datasets]);
  }
}
