import { Component, Input, OnInit } from '@angular/core';
import { LuminairesService } from '../luminaires.service';


@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.css']
})
export class BoardDetailComponent implements OnInit {

  feature!:GeoJSON.Feature
  

  public mapping:any = [
    {key: 'altura', label: 'Altura'},
    {key: 'cantidad_lamparas', label: 'Cantidad de Lámparas'},
    {key: 'distancia_eje',     label: 'Distancia Eje'},
    {key: 'equipo_auxiliar',      label: 'Equipo auxiliar'},
    {key: 'estado_lampara',  label:  'Estado lámpara'},
    {key: 'estado_luminaria',  label:  'Estado luminaria'},
    {key: 'estado_soporte',  label:  'Estado soporte'},
    {key: 'etiqueta',  label:  'Etiqueta'},
    {key: 'lado_via',  label:  'Lado vía'},
    {key: 'longitud_brazo',  label:  'Longitud brazo'},
    {key: 'marca_lampara',  label:  'Marca Lampara'},
    {key: 'marca_luminaria',  label:  'Marca Luminaria'},
    {key: 'marca_soporte',  label:  'Marca Soporte'},
    {key: 'modelo_lampara',  label:  'Modelo lampara'}
  ] 

  constructor(private luminairesService:LuminairesService) {
    this.luminairesService.subscribeUpdate((feature:GeoJSON.Feature)=>{
      this.feature = feature
    })
  }

  ngOnInit(): void {
    this.feature = this.luminairesService.getCurrentFeature()
  }

}
