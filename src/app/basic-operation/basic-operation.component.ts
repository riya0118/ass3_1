import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-operation',
  templateUrl: './basic-operation.component.html',
  styleUrls: ['./basic-operation.component.css']
})
export class BasicOperationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  num1: number = 10;
  name: string = "Riya Parekh";
  dob: Date = new Date('18-Oct-2001');

  array1 = [10, 20, 30, 40, 50];
  selectedItem: any;

}
