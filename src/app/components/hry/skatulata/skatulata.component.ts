import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenicService } from 'src/app/services/menic.service';
import { SlovickaService } from 'src/app/services/slovicka.service';
@Component({
  selector: 'app-skatulata',
  templateUrl: './skatulata.component.html',
  styleUrls: ['./skatulata.component.scss']
})
export class SkatulataComponent {
  private route = inject(ActivatedRoute);
  private id:any = this.route.snapshot.paramMap.get("id");
  constructor(private menicService:MenicService, private slovickaService:SlovickaService){}
  public frs:string = "";
  public scnd:string = "";
  public gameSettings:any;
  public slovickaJson:any;
  public slovickaRozbalene:any = [];
  public ready:number = 0;
  
  public first_array: any = [];
  public second_array: any = [];
  ngOnInit():void{
      this.menicService.ziskatHru(this.id.split('/').reverse()[0]).subscribe((value:any)=>{
        this.gameSettings = value;
        this.slovickaService.ziskatViceSlovicek({"slovicka":value.slovicka}).subscribe((value2:any)=>{
          this.slovickaJson = value2;
          this.slovickaJson.forEach((element:any) => {
            this.slovickaRozbalene = this.slovickaRozbalene.concat(JSON.parse(element.slovicka_json));
            
            this.slovickaRozbalene.forEach((element:any) => {
              this.first_array.push(element.first);
              this.second_array.push(element.second);
            })
            this.first_array = this.promichatSeznam(this.first_array);
            
            this.second_array = this.promichatSeznam(this.second_array);
          });
          this.ready = 1;
        })
      });
  }
  zjisTiSlovicko(slovickoA:any,slovickoB:any):boolean{
    if (this.slovickaRozbalene.filter(function(e:any) { return e.first === slovickoA && e.second === slovickoB; }).length > 0) {
      this.first_array = this.arrayRemove(this.first_array,slovickoA);
      this.second_array = this.arrayRemove(this.second_array,slovickoB);
      setTimeout(() => {
        this.frs = "";
        this.scnd = "";
        if(this.first_array.length == 0){
            this.ready=2;
          }
      }, 0);
      return true;
    }
    return false;
  }

  arrayRemove(arr:any, value:any) { 
    return arr.filter(function (geeks:any) { 
        return geeks != value; 
    }); 
  
} 
  promichatSeznam(array:any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}