import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProgressSectionComponent } from './progress-section/progress-section.component';
import { ProgressItemComponent } from './progress-item/progress-item.component';
import { SelectionListComponent } from './selection-list/selection-list.component';
import { SelectionItemComponent } from './selection-item/selection-item.component';
import { DatasetDetailComponent } from './dataset-detail/dataset-detail.component';
import { ReviewFeedbackComponent } from './review-feedback/review-feedback.component';
import { PublishComponent } from './publish/publish.component';

import {StyleClassModule} from 'primeng/styleclass';
import {AvatarModule} from 'primeng/avatar';
import {TagModule} from "primeng/tag";
import {ButtonModule} from "primeng/button";
import {CheckboxModule} from "primeng/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    ProgressSectionComponent,
    ProgressItemComponent,
    SelectionListComponent,
    SelectionItemComponent,
    DatasetDetailComponent,
    ReviewFeedbackComponent,
    PublishComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StyleClassModule,
        AvatarModule,
        TagModule,
        ButtonModule,
        CheckboxModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
