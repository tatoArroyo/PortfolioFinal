import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from '../model/proyecto';
import { ProyectoService } from '../service/proyecto.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
  nombre: string;
  acercaproyec: string;
  img: string;

  constructor(private SproyectoService: ProyectoService, private router: Router) { }


  ngOnInit(): void {
  }
  onCreate(): void{
    const proyecto = new Proyecto(this.nombre, this.acercaproyec, this.img);
    this.SproyectoService.save(proyecto).subscribe(data => {
      alert("Proyecto añadido");
      this.router.navigate(['']);
    },err =>{
      alert("fallo en la carga, intente nuevamente");
      this.router.navigate(['']);
    }  
    )
  }

}
