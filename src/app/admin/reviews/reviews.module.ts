import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { CategoryComponent } from './components/category/category.component';
import { CategorySidePanelComponent } from './components/category-side-panel/category-side-panel.component';
import { QuestionBankComponent } from './components/question-bank/question-bank.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ReviewsHomeComponent } from './components/reviews-home/reviews-home.component';


@NgModule({
  declarations: [
    CategoryComponent,
    CategorySidePanelComponent,
    QuestionBankComponent,
    CategoryListComponent,
    ReviewsHomeComponent
  ],
  imports: [
    CommonModule,
    ReviewsRoutingModule
  ]
})
export class ReviewsModule { }
