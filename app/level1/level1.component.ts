import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.css']
})
export class Level1Component implements OnInit {
  enterCity = '';
  clickMessage = "This is the default click message";
  values = '';
  showSecret = false;
  log = [];


  constructor() { }

  ngOnInit() {
  }
  onUpdate(event: any){
    console.log(event);
    this.enterCity = (<HTMLInputElement>event.target).value;
  }
  onClickOne(){
    this.clickMessage = "Fuckin Iron Man!";


  }
  logDetails(){
    this.log.push(new Date);
  }

  onKey(event: any) { // without type info
    this.values += event.key + ' | ';
}
}
