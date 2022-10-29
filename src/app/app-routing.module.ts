import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SelectionListComponent} from "./selection-list/selection-list.component";
import {DatasetDetailComponent} from "./dataset-detail/dataset-detail.component";
import {ReviewFeedbackComponent} from "./review-feedback/review-feedback.component";
import {PublishComponent} from "./publish/publish.component";

const routes: Routes = [
  {path: "select", component: SelectionListComponent},
  {path: "detail", component: DatasetDetailComponent},
  {path: "review", component: ReviewFeedbackComponent},
  {path: "publish", component: PublishComponent},
  {path: "", redirectTo: "/select", pathMatch: "full"},
  {path:"**", redirectTo: "/select"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
