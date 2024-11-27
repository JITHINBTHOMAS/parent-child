import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent-child';

  EnterName = "Monkey D Luffy"
  EnterAge="22"
  EnterStatus="Single"
  ParentData1 = ""
  ParentData2 = ""
  ParentData3 = ""

  transferData(){
    this.ParentData1=this.EnterName
    this.ParentData2=this.EnterAge
    this.ParentData3=this.EnterStatus
  }

  value=""
  sendData(value:string){
    this.value=value;
  }
}
