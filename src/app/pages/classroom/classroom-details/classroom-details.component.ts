import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-classroom-details',
  templateUrl: './classroom-details.component.html',
  styleUrls: ['./classroom-details.component.css']
})
export class ClassroomDetailsComponent implements OnInit{
  //classrooms: String[];

constructor(){}

ngOnInit(){
  //inicializar classroom con una llamada al backend para traerme la salas que hay en base de datos
}
reservation(){
  //hacer llamada a backend con la reserva
}
}