import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ApiService } from "../../../api.service";
import { NzMessageService } from "ng-zorro-antd";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-fakultet",
  templateUrl: "./fakultet.component.html",
  styleUrls: ["./fakultet.component.scss"]
})
export class FakultetComponent implements OnInit {
  private id;

  public myForm: FormGroup;

  public fakulteti: Array<any> = [];

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private message: NzMessageService,
    private route: ActivatedRoute
  ) {
    this.init();
   
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");

    if (this.id ) {
      // TODO NAPRAVITI BACKEND DA SE MOŽE DOHVATITI SAMO JEDAN FAKULTET A NE SVI
      this.apiService.dohvatiFakultete().subscribe(response => {
        let fakultet = response.data.find(x=> x.id == this.id); //TODO ovo maknutiu kada napraviš gornji TODO jer više neće biti lista nego samo jedan objekt
        //TODO što ako je predan ID koji nije u listi
        this.myForm.patchValue({
          naziv: fakultet.naziv
        });
      });
    }
  }


  private init(): void {
    this.kreirajFormu();
  }

  private kreirajFormu(): void {
    this.myForm = this.fb.group({
      naziv: ""
    });
  }



  // ========= HTML METODE =========

  public kreirajFakultet(): void {
    this.apiService
      .kreirajFakultet(this.myForm.value.naziv, this.id)
      .subscribe(
        response => console.log(response, this.createMessage("success")),
        error => console.log(error, this.createMessage("error"))
      );
  }

  public createMessage(type: string): void {
    if (type === "success") {
      this.message.create(type, `Uspjesno je spremljen fakultet`);
    } else {
      this.message.create(type, `Spremanje nije uspjelo`);
    }
  }
}
