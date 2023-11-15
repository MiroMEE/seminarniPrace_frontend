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
  public slovicka:any;
  public ready:boolean = false;
  
  ngOnInit():void{
    console.log(this.id);
      this.menicService.ziskatHru(this.id.split('/').reverse()[0]).subscribe((value:any)=>{
        this.gameSettings = value;
        this.slovickaService.ziskatViceSlovicek({"slovicka":value.slovicka}).subscribe((value2:any)=>{
          this.ready = !this.ready;
          this.slovicka = value2;
          console.log(this.gameSettings,this.slovicka);
        })
      });
  }  
}