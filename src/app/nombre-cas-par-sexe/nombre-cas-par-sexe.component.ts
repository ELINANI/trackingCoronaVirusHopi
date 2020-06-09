import { Component, OnInit } from '@angular/core';
import { NombreCasParSexeService } from '../services/nombre-cas-par-sexe.service';
import {Chart} from 'node_modules/chart.js';
@Component({
  selector: 'app-nombre-cas-par-sexe',
  templateUrl: './nombre-cas-par-sexe.component.html',
  styleUrls: ['./nombre-cas-par-sexe.component.css']
})
export class NombreCasParSexeComponent implements OnInit {
  LineChart = [];
  type:string[] = [];
  nombre:number[] = [];
  constructor(public service:NombreCasParSexeService) { }
  public load(){
    for(let n of this.service.nombreCasParSexes){
      this.type.push(n.sexeClient);
      this.nombre.push(n.nombre) ;
    }
   }
  ngOnInit(): void {
    this.service.getAll();
      this.load();
      console.log(this.service.nombreCasParSexes);
      this.loadChart();
  }

  public loadChart():void {
    this.LineChart = new Chart('myChart', {
      type:'pie', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
      data:{
        labels:this.type,
        datasets:[{
          label:'Niveaux',
          data:this.nombre,
          //backgroundColor:'green',
          backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ],
          borderWidth:1,
          borderColor:'#777',
          hoverBorderWidth:3,
          hoverBorderColor:'#000'
        }]
      },
      options:{
        title:{
          display:true,
          text:'Nombre Cas Par Sexe',
          fontSize:25
        },
        legend:{
          display:true,
          position:'right',
          labels:{
            fontColor:'#000'
          }
        },
        layout:{
          padding:{
            left:50,
            right:0,
            bottom:0,
            top:0
          }
        },
        tooltips:{
          enabled:true
        }
      }
    });
   
  }
  
}
