import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-progress-item',
  templateUrl: './progress-item.component.html',
  styleUrls: ['./progress-item.component.scss']
})
export class ProgressItemComponent implements OnInit {

  @Input() name: string = '';
  @Input() description: string = '';
  @Input() icon: string = 'pi-question';
  @Input() active: boolean = false;
  @Input() enabled: boolean = false;
  @Input() linkTo: string = '/';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  icon_class(): string {
    return `${this.icon} ${this.status_color()} text-2xl md:text-4xl mb-2 md:mb-0 mr-0 md:mr-3`;
  }

  status_color(): string {
    return !this.enabled ? 'text-500' : this.active ? 'text-blue-500' : 'text-green-500';
  }

  router_link(): void {
    this.router.navigate([this.linkTo]).then();
  }

}
