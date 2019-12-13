import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth.service';
import { Router } from '@angular/router';
import { Registracija } from 'app/model/users/registartion';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  korisnik: Registracija;
  maksimalnaDuzina: number = 30;
  mailNijeJedinstven: boolean = true;

  constructor(private auth: AuthService, private router: Router) {
    this.korisnik = new Registracija();
  }

  ngOnInit() {
  }


  register(){
    let message: string = this.proveriUnosKorisnik();
    if(message === "OK")
    {
      this.auth.signup(this.korisnik)
          .subscribe(
            res => 
            {
              this.router.navigate(['login'])
            },
            err => {
              console.log("usao kao error");
              if (err.status === 400) { // bad request losi kredencijali
                console.log("usao 400");
                this.mailNijeJedinstven = false;
            }
          }
        )
    }
    else{
      alert(message);
    }
  }

  validateEmail(email: string) 
  {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validatePhoneNumber(broj: string){
    let re = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    return re.test(String(broj).toLowerCase());
  }

  validatePasswords(){
    if(this.korisnik.lozinka === this.korisnik.potvrdaLozinke){
      return true;
    }
    else{
      return false;
    }
  }

proveriUnosKorisnik(): string{
  if(this.korisnik.email === "" || this.korisnik.email.length > 60){
    return "Morate popuniti validnu e-mail adresu koja mora biti kraca od " + 60 + " karaktera";
  }

  if(!this.validateEmail(this.korisnik.email)){
    return "Morate uneti validnu e-mail adresu";
  }
  
  if(this.korisnik.lozinka === "" || this.korisnik.lozinka.length > this.maksimalnaDuzina){
    return "Morate popuniti lozinku koja mora biti kraca od " + this.maksimalnaDuzina + " karaktera";
  }

  if(this.korisnik.potvrdaLozinke === "" || this.korisnik.potvrdaLozinke.length > this.maksimalnaDuzina){
    return "Morate popuniti ponovo lozinku koja mora biti kraca od " + this.maksimalnaDuzina + " karaktera";
  }

  if(!this.validatePasswords()){
    return "lozinka i potvrda lozinke moraju da se poklapaju!";
  }

  if(this.korisnik.ime === "" || this.korisnik.ime.length > this.maksimalnaDuzina){
    return "Morate popuniti ime koja mora biti kraca od " + this.maksimalnaDuzina + " karaktera";
  }

  if(this.korisnik.prezime === "" || this.korisnik.prezime.length > this.maksimalnaDuzina){
    return "Morate popuniti prezime koja mora biti kraca od " + this.maksimalnaDuzina + " karaktera";
  }

  if(this.korisnik.mesto === "" || this.korisnik.mesto.length > this.maksimalnaDuzina){
    return "Morate popuniti mesto koje mora biti kraca od " + this.maksimalnaDuzina + " karaktera";
  }

  if(this.korisnik.brojTelefona === ""){
    return "Morate popuniti broj telefona";
  }

  if(!this.validatePhoneNumber(this.korisnik.brojTelefona)){
    return "Morate popuniti validni broj telefona  na primer 000-000-0000";
  }

  return "OK";
}

}
