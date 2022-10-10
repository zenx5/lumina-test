import { Component } from '@angular/core';
import { circleMarker, geoJSON, GeoJSONOptions, LatLng, LatLngBounds, Layer, Map, MapOptions, tileLayer, TileLayer, ZoomOptions } from 'leaflet';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  public map:Map;
  
  public mapOptions:MapOptions = {
    zoom: 17,
    zoomControl: false,
    center: [40.395347, -3.694041],
    preferCanvas: true
  };

  public baseLayer:TileLayer;
  public target!:any

  public  mapFitBounds:LatLngBounds = new LatLngBounds([
    [37.50547228, -4.22810257],
    [37.70590845000001, -3.98959274]
  ]);

  public constructor()
  {
    
    this.baseLayer = tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      crossOrigin: 'anonymous',
      className: 'OSM',
      maxNativeZoom: 19,
      maxZoom: 22,
      minZoom: 5
    });

  }

  public handlerEventInPoint = (feature:any) => () =>{
    this.target = feature
  }

  public onMapReady(map:Map):void
  {
    this.map = map;
    
    this.addLuminairesLayer();
  }

  private async addLuminairesLayer():Promise<void>
  {
    const luminaires = await (await fetch('assets/data/luminarias.geojson')).json();
    const options:GeoJSONOptions = {
      pointToLayer: (feature:GeoJSON.Feature, latLng:LatLng) => circleMarker(latLng),
      onEachFeature: (feature:GeoJSON.Feature, layer:Layer) => layer.addEventListener('click', this.handlerEventInPoint(feature) ),
      style: feature =>  ({
        radius: 8, 
        color: "#333",
        fillColor: "#FFFA4D",
        weight: 1,
        opacity: 1,
        fillOpacity: 1
      }) 
    };
    geoJSON(luminaires, options).addTo(this.map);
  }
}
