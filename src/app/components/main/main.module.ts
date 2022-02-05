import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';

const childRoutes: Routes = [
  { path: '**', component: MainComponent }
];

@NgModule({
  declarations: [
    FooterComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(childRoutes)
  ]
})
export class MainModule { }
