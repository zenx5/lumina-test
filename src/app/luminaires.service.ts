import { Injectable } from '@angular/core';
import { circleMarker, geoJSON, GeoJSONOptions, LatLng, LatLngBounds, Layer, Map, MapOptions, tileLayer, TileLayer } from 'leaflet';


interface Count{
  tag: string,
  count:number
}

@Injectable({
  providedIn: 'root'
})
export class LuminairesService {

  private callbacks:any = []
  public currentFeature!:GeoJSON.Feature

  constructor() { }

  public setCurrentFeature(feature:GeoJSON.Feature){
    this.currentFeature = feature
    this.callbacks.forEach( (callback:any) => callback(feature))
  }
  
  public getCurrentFeature(){
    return this.currentFeature
  }

  public subscribeUpdate( callback:any){
    this.callbacks.push(callback)
  }

  public async getAllFeatures(){
    const luminaires = await (await fetch('assets/data/luminarias.geojson')).json();
    return luminaires.features
  }

  public async getStats(type:string){
    const features = await this.getAllFeatures()
    let counter:Array<Count>=[]
    features.forEach( (feature:GeoJSON.Feature) => {
      if( feature!.properties![type] !== undefined ){
        let index = counter.findIndex( count=> count.tag === feature!.properties![type] )
        if( index !== -1) {
          counter[index].count++
        }else{
          counter.push({tag:feature!.properties![type], count:1})
        }
      }
    } )
    console.log('counter: ', counter)
    return counter    
  }

  public eventForEachFeature(handlerClickEvent:any, feature:GeoJSON.Feature, layer:Layer){
    layer.addEventListener('click', handlerClickEvent(feature, layer))
  }

  public async addLuminairesLayerToMap(map:Map, handlerClickEvent:any):Promise<void>
  {
    console.log('this', this)
    const luminaires = await (await fetch('assets/data/luminarias.geojson')).json();
    const options:GeoJSONOptions = {
      pointToLayer: (feature:GeoJSON.Feature, latLng:LatLng) => circleMarker(latLng),
      onEachFeature: (feature:GeoJSON.Feature, layer:Layer) => this.eventForEachFeature(handlerClickEvent, feature, layer),
      style: feature =>  ({
        radius: 8, 
        color: "#333",
        fillColor: "#FFFA4D",
        weight: 1,
        opacity: 1,
        fillOpacity: 1
      }) 
    };
    geoJSON(luminaires, options).addTo(map); 
  }
}
