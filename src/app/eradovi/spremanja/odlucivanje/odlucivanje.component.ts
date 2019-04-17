import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { NzMessageService } from 'ng-zorro-antd';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-odlucivanje',
  templateUrl: './odlucivanje.component.html',
  styleUrls: ['./odlucivanje.component.scss']
})
export class OdlucivanjeComponent implements OnInit {

  private id;

  private statusi_rada_id;
  
  public myForm: FormGroup;

  public fakulteti: Array<any> = [];
  
  private url: string = environment.apiServer + "/fakultet";


  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
   
    private message: NzMessageService,
    private route: ActivatedRoute,
    
  ) {
   
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.statusi_rada_id = this.route.snapshot.paramMap.get("statusi_rada_id");
   
    this.SpremiOdluku();
  }

  // ========= HTML METODE =========

  public SpremiOdluku(): void {
    this.apiService
      .SpremiOdluku(this.id,this.statusi_rada_id)
      .subscribe(
        response => console.log(response, this.createMessage("success")),
        error => console.log(error, this.createMessage("error"))
      );
      
  }

  public createMessage(type: string): void {

    if (this.statusi_rada_id == 2) {
      if('success'){
       this.message.create(type, `Prihvatili ste rad`);

      }
      else{
        this.message.create(type, `Nemozete donjeti ovu odluku`);
      }
      
    }
    
    if(this.statusi_rada_id == 3) {
     

      if('success'){ 
        this.message.create(type, `Odbili ste rad`);
       }
      else{
         this.message.create(type, `Nemozete donjeti ovu odluku`);
       }
       
    }
    
  }

  
}
