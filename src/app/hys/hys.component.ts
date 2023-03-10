import { Component, OnInit } from '@angular/core';
import { Skill } from '../model/skill';
import { SkillService } from '../service/skill.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  skill: Skill[] = [];
 


  constructor(private skillS: SkillService, 
    private tokenService: TokenService){}
isLogged = false;

  ngOnInit(): void {
    this.cargarSkill();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
}
cargarSkill(): void{
  this.skillS.lista().subscribe(data => {this.skill = data;
  }
    )
}

delete(id: number){
  if(id != undefined){
this.skillS.delete(id).subscribe(
  data =>{
    this.cargarSkill();
  }, err =>{
    alert("no se pudo eliminar la habilidad")
  }
)
  }
} 

}
