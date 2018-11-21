import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  identifiers = ["popularity","price","name"];

  players = ["Ravichandran Ashwin","Hardik Pandya","Krunal Pandya","Marcus Stoinis"];
    

  identifier:string;


  constructor() { }
  
  

  ngOnInit() {
  }

  @Input() set id(name:string){
    for(var i=0;i<this.identifiers.length;i++){
      if(this.identifiers[i]===name){
        this.identifier=this.identifiers[i];
      }
    }
  }

  @Output() onSetCaptain = new EventEmitter<string>();
  @Output() onSetViceCaptain = new EventEmitter<string>();

  setCaptain(name:string){
    this.onSetCaptain.emit(name);
  }

  setVCaptain(name:string){
    this.onSetViceCaptain.emit(name);
  }

}