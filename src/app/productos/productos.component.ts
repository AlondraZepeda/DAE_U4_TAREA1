import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { StarRatingComponent } from 'ng-starrating';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {
  public productos; 
  constructor(private route: ActivatedRoute, 
              private productService: ProductService) { 
    this.productos = productService.productos;
    /* this.productos = [
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
        description: " Catodo común, leds en color rojo.",
      },
   ];*/
  }
  ngOnInit() { }
 
  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue}, 
          New Value: ${$event.newValue}, 
          Checked Color: ${$event.starRating.checkedcolor}, 
          Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
}


 
  