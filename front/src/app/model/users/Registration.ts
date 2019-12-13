export class Registration{
    public id: number;
    public ime: string;
    public prezime: string;
    public lozinka: string;
    public potvrdaLozinke: string;
    public email: string;
    public mesto: string;
    public brojTelefona: string;

    constructor(){
        this.id = 0;
        this.ime = "";
        this.prezime = "";
        this.lozinka = "";
        this.potvrdaLozinke = "";
        this.email = "";
        this.mesto = "";
        this.brojTelefona = "";
        
    }
}
