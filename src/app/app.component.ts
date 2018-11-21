import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  captain:string;
  vcaptain:string;
  
  captainSet(pname:string){
    this.captain=`Captain: ${pname}`;
  }

  vicecaptainSet(pname:string){
    this.vcaptain=`Vice-Captain: ${pname}`;
  }
}