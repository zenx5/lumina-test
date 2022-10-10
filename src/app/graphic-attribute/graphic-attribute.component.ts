import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-graphic-attribute',
  templateUrl: './graphic-attribute.component.html',
  styleUrls: ['./graphic-attribute.component.css']
})
export class GraphicAttributeComponent implements OnInit {

  @Input() stats:any
  public selection:string='none';
  
  public getData(){
    if(this.selection !== 'none'){
      return Object.keys( this.stats[this.selection] )
    }
    return []
  }

  public eventChanged(event:any){
    this.selection = event!.target!.value
  }

  constructor() {
    console.log( this.stats)
   }

  ngOnInit(): void {
    console.log( this.stats)
  }

}
