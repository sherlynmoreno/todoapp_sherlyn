import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {


  groups:Array<any> = [];
  constructor() { }


  ngOnInit(): void {
    this.groups = [
      {
        label: 'Nuevos',
        color: 'tomato',
        list:[
          {
            order:'Como instalar Angular',
            items:[
              {
                key: 'price',
                value: 152
              },
              {
                key: 'time',
                value: 152
              },
              {
                key: 'author',
                value: {
                  name: 'Angela Yaneth',
                  avatar: 'https://www.flaticon.es/icono-gratis/avatar_6676023'
                }
              }
            ]
          }
        ]
      },
      {
        label: 'trabajando',
        color: 'green',
        list:[
          {
            order:'Hola Mundo',
            items:[
              {
                key: 'price',
                value: 152
              },
              {
                key: 'time',
                value: 152
              },
              {
                key: 'author',
                value: {
                  name: 'Angela Yaneth',
                  avatar: 'https://www.flaticon.es/icono-gratis/avatar_6676023'
                }
              }
            ]
          }
        ]
      },
      {
        label: 'Realizadas',
        color: 'blue',
        list:[
          {
            order:'Hola Mundo',
            items:[
              {
                key: 'price',
                value: 152
              },
              {
                key: 'time',
                value: 152
              },
              {
                key: 'author',
                value: {
                  name: 'Angela Yaneth',
                  avatar: 'https://www.flaticon.es/icono-gratis/avatar_6676023'
                }
              }
            ]
          }
        ]
      },
      

    ]
  }

}