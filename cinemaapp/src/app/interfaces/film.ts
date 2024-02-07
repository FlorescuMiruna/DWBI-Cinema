export class Film {
    public idFilm: number;
   public nume: string;
   public gen: string;
   public regizor: string;
   public dataLansare: string;
   public notaImdb: number ;
   public durata: number ;
   public rating: number ;
  
  
   constructor() {
      this.idFilm = null as any;
     this.nume = '';
     this.gen = '';
     this.regizor = '';
     this.dataLansare = '';
     this.notaImdb = null as any;
     this.durata = null as any;
     this.rating = null as any;

   }

}