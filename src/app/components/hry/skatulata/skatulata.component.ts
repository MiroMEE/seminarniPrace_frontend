import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import { Component, inject } from '@angular/core';
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

  public gameSettings:any;
  public slovickaJson:any;
  public slovickaRozbalene:any = [];
  public ready:boolean = false;
  
  ngOnInit():void{
    console.log(this.id);
      this.menicService.ziskatHru(this.id.split('/').reverse()[0]).subscribe((value:any)=>{
        this.gameSettings = value;
        this.slovickaService.ziskatViceSlovicek({"slovicka":value.slovicka}).subscribe((value2:any)=>{
          this.ready = !this.ready;
          this.slovickaJson = value2;
          this.slovickaJson.forEach((element:any) => {
            this.slovickaRozbalene = this.slovickaRozbalene.concat(JSON.parse(element.slovicka_json));
          });
        })
      });
  } 
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.slovickaRozbalene, event.previousIndex, event.currentIndex);
  }
}