import { Component, OnInit } from '@angular/core';
import { Korisnik } from 'app/model/users/User';
import { KorisnikService } from 'app/service/users/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  id: number;
  korisnik: Korisnik = new Korisnik();

  constructor(private korisnikService : KorisnikService, private router: Router){
    
  }

  ngOnInit() {
    this.korisnik = JSON.parse(localStorage.getItem('token'));
    //this.korisnik.id = 1; //OBRISI
  }

  update(){
    this.korisnikService.updateKorisnik(this.id, this.korisnik).subscribe(
      s => {
        this.korisnik = s;
        localStorage.setItem(JSON.stringify(this.korisnik), 'token');
        //this.router.navigate(['korisnik/' + this.id]);
      },
      err => console.log("err")
    );
  }

  goToChangePassword(){
    //promeniLozinku
    this.router.navigate(['promeniLozinku']);
    //this.router.navigate(['korisnik/' + this.id + '/promenaLozinke']);
  }

}
