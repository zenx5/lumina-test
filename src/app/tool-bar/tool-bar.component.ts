import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  @Input() point!:GeoJSON.Feature
  @Input() stats!:any

  constructor() { }

  ngOnInit(): void {
  }

}
