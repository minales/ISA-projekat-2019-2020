export class User{

    public id: number;
	public ime: string;
	public prezime: string;
	public email: string;
	public lozinka: string;
	public grad: string;
	public telefon: string;
    public tipKorisnika: string;
    public tipAdministratora: string;
    public aktiviran: boolean;
    
    constructor(){
        this.id = 0;
        this.ime = "";
        this.prezime = "";
        this.email = "";
        this.lozinka = "";
        this.grad = "";
        this.telefon = "";
        this.tipKorisnika = "";
        this.tipAdministratora = "";
        this.aktiviran = false;
    }
}