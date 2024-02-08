import { Oras } from "./oras";

export class Cinema {
    public idCinema: number;
   public nume: string;
   public nrLocuri: number;
   public nrSali: number;
   public oras: Oras ;

  
  
   constructor() {
      this.idCinema = null as any;
     this.nume = '';
     this.nrSali = null as any;
     this.nrLocuri = null as any;
     this.oras = new Oras();
   }

}