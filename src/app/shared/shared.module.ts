import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplaceSpacePipe } from './pipes/replace-space.pipe';



@NgModule({
  declarations: [
    ReplaceSpacePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ReplaceSpacePipe
  ],
  providers:[
    ReplaceSpacePipe
  ]
})
export class SharedModule { }
