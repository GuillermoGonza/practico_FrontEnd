
import { Component, OnInit } from '@angular/core';
import { ProvinciasService } from '../../services/provincias.service';
import { Provincia } from '../../interfaces/provincias';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';



@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css']
})
export class ProvinciasComponent implements OnInit {

  provincias: any = []

  constructor( private provinciasService: ProvinciasService ) { 

  }

  ngOnInit() {

    this.provinciasService.cargarProvincias().subscribe( (data: Provincia) => {
      console.log(data);
      this.provincias = data
    })

  }

  provinciaSelecionada( forma: NgForm ){
    console.log(forma.value);
  }

}
