import { Component, Input, OnInit } from '@angular/core';
import { TestCourseService } from '@shared/services/test-course.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() idOrder: string | number = 0
  @Input() items: Array<any>=[]
  constructor(private testCourseService:TestCourseService) { }

//   ngOnInit(): void {
//   }
sendData():void{
  this.testCourseService.setData('Hola desde card 😊') 
 }
}