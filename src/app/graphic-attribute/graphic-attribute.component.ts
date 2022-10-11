import { Component, Input, Output, OnInit, OnChanges, EventEmitter } from '@angular/core';
import { Chart, PieController, LineController, registerables } from 'chart.js'



@Component({
  selector: 'app-graphic-attribute',
  templateUrl: './graphic-attribute.component.html',
  styleUrls: ['./graphic-attribute.component.css']
})
export class GraphicAttributeComponent implements OnInit {

  @Input() stats!:any
  public selection:string='none';
  private context!:any
  private chart!:any
  
  public getData(){
    if(this.selection !== 'none'){
      return Object.keys( this.stats[this.selection] )
    }
    return []
  }

  public draw(){
    const keys = Object.keys( this.stats[this.selection] )
    const values = Object.values( this.stats[this.selection] )
    this.chart.data.labels = keys
    this.chart.data.datasets[0].data = values
    this.chart.data.datasets[0].backgroundColor = this.getColors(values.length)
    this.chart.update()    
  }

  getColors(quantity:number){
    const hex = (N:number)=>Math.floor(Math.random()*N).toString(16)
    return (new Array(quantity)).fill('').map(e=>{
      return `#${hex(16)}${hex(10)}${hex(16)}`
    })
  }

  public eventChanged(event:any){
    this.selection = event!.target!.value
    if( event!.target!.value !== 'none' ){
      this.draw()
    }
  }

  constructor() {}
   
  ngOnInit(): void {    
    console.log('init')
    this.context = document.querySelector('#g-attr-canvas')    
    Chart.register(...registerables);
    this.chart = new Chart(this.context, 
      {
        type: 'pie',
        data: {
          labels: [],
          datasets: [{
            label: 'Luminaries',
            data: [],
            backgroundColor: [],
            hoverOffset: 4
          }]
        },
      }
    )
    this.chart.options.plugins.legend.position = 'bottom'
    this.chart.update()    
  }
}
