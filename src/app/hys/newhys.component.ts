import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from '../model/skill';
import { SkillService } from '../service/skill.service';

@Component({
  selector: 'app-newhys',
  templateUrl: './newhys.component.html',
  styleUrls: ['./newhys.component.css']
})
export class NewhysComponent implements OnInit{

  nombre: string ;
  porcentaje: number;
  


  constructor(private skillS: SkillService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void {
    const skill = new Skill(this.nombre, this.porcentaje);
    this.skillS.save(skill).subscribe(data => {
      alert("Skill añadida");
      this.router.navigate(['']);
    }, err => {
      alert("fallo en la carga, intente nuevamente");
      this.router.navigate(['']);
    }  
    )
  }
}
