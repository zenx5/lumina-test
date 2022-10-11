import { Component } from '@angular/core';
import { circleMarker, geoJSON, GeoJSONOptions, LatLng, LatLngBounds, Layer, Map, MapOptions, tileLayer, TileLayer } from 'leaflet';
import { LuminairesService } from './luminaires.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  public map!:Map;
  public stats:any = {
    tipo_lampara : {},
    tipo_luminaria : {},
    tipo_soporte : {},
  }
  public baseLayer:TileLayer;
  public target!:GeoJSON.Feature
  public lastLayer!:any
  
  
  public mapOptions:MapOptions = {
    zoom: 17,
    zoomControl: false,
    center: [40.395347, -3.694041],
    preferCanvas: true
  };

  public  mapFitBounds:LatLngBounds = new LatLngBounds([
    [37.50547228, -4.22810257],
    [37.70590845000001, -3.98959274]
  ]);

  public constructor(private luminairesService:LuminairesService)
  {
    this.baseLayer = tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      crossOrigin: 'anonymous',
      className: 'OSM',
      maxNativeZoom: 19,
      maxZoom: 22,
      minZoom: 5
    });
  }

  public handlerEventInPoint = (feature:any, layer:any) => () =>{
    if( this.lastLayer ){
      this.lastLayer.options.fillColor = '#FFFA4D'
    }    
    this.luminairesService.setCurrentFeature(feature)
    this.lastLayer = layer
    layer.options.fillColor = '#f00'
    this.map.flyTo(new LatLng(feature.geometry.coordinates[1],feature.geometry.coordinates[0]),17,{animate:true})
  }

  

  // private addStats(feature:GeoJSON.Feature, type:string){
  //   if( feature!.properties![type] !== undefined ){
  //     if( this.stats[type][`${feature!.properties![type]}`] ){
  //       this.stats[type][`${feature!.properties![type]}`]++;
  //     }else{
  //       this.stats[type] = { ...this.stats[type], [`${feature!.properties![type]}`] : 1}
  //     }      
  //   }
  // }

  public onMapReady(map:Map):void
  {
    this.map = map;    
    //this.addLuminairesLayer();
    this.luminairesService.addLuminairesLayerToMap(map, this.handlerEventInPoint)
  }

  // private async addLuminairesLayer():Promise<void>
  // {
  //   const luminaires = await (await fetch('assets/data/luminarias.geojson')).json();
  //   const options:GeoJSONOptions = {
  //     pointToLayer: (feature:GeoJSON.Feature, latLng:LatLng) => circleMarker(latLng),
  //     onEachFeature: (feature:GeoJSON.Feature, layer:Layer) => this.eventForEachFeature(feature, layer),
  //     style: feature =>  ({
  //       radius: 8, 
  //       color: "#333",
  //       fillColor: "#FFFA4D",
  //       weight: 1,
  //       opacity: 1,
  //       fillOpacity: 1
  //     }) 
  //   };
  //   geoJSON(luminaires, options).addTo(this.map); 
  // }
}
