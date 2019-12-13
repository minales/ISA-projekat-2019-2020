import { Component, OnInit } from '@angular/core';
import { Korisnik } from 'app/model/users/User';
import { AuthService } from 'app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promeni-lozinku',
  templateUrl: './promeni-lozinku.component.html',
  styleUrls: ['./promeni-lozinku.component.css']
})
export class PromeniLozinkuComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  staraLozinka: string = undefined;
  novaLozinka: string = undefined;
  ulogovaniKorisnik: Korisnik = new Korisnik();

  ngOnInit() {
    this.ulogovaniKorisnik = JSON.parse(localStorage.getItem('token'));
    //this.ulogovaniKorisnik.lozinka = "stara";

  }

  update(){
    if(this.ulogovaniKorisnik.lozinka == this.staraLozinka){
      this.ulogovaniKorisnik.lozinka = this.novaLozinka;
      
      this.auth.promeniLozinku(this.ulogovaniKorisnik).subscribe(
        s => {
          this.router.navigate(['avionske-kompanije']);
        }
      )

    }
    else{
      alert('lose unesena stara lozinka');
    }
  }

}
