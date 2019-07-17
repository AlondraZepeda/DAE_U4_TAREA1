import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {}
     public productos = [
      {
        name: 'Asus VivoBook S',
        id: 1,
        description: " Seis veces mas rapido que el estándar 802.11n.",
      },
      {
        name: 'Mouse inalambrico plegable.',
        id: 2,
        description: " Mouse nuevo, bonito y elegante.",
      },
      {
        name: 'Celular Samsung Galaxy ',
        id: 3,
        description: "Dualsim",
      },
      {
        name: ' Samsung TV Smart ',
        id: 4,
        description: " 32 Pulgadas FHD Smart Tv-Negro",
      },
      {
        name: ' Display 7 segmentos ',
        id: 5,
        description: " Catodo común, leds en color rojo."
      }
    ];
}

