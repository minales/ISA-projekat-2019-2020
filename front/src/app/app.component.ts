import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  public disableNavBar: boolean = true;
  //public logovaniKorisnik: Korisnik;
  public prijavljen: boolean = false;
  public tipkorisnika: string;


  constructor( private router: Router) { 
    let res = localStorage.getItem('token');
    if(res != null){
      this.prijavljen = true;

    }
  }

  ngOnInit() {

  }

  goToProfile(){
    if(this.tipkorisnika === "ROLE_Registered_user"){
      //this.router.navigate(['korisnik/' + this.logovaniKorisnik.id]);
    }
  }

  odjaviSe(){
    this.prijavljen = false;
    this.router.navigate(['login']);

  }


  profilKorisnika(){
    if(this.tipkorisnika === "ROLE_Registered_user"){
      return true;
    }
    return false; 
  }

}
