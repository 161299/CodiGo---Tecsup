import { WebsocketService } from './../../services/websocket.service';
import { ProductoService } from './../../services/producto.service';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
// import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-ppcategoria',
  templateUrl: './ppcategoria.component.html',
  styleUrls: ['./ppcategoria.component.css']
})
export class PpcategoriaComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{ ticks: { beginAtZero: true}}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  categorias = [];
  ppcategoria = [];
  public barChartLabels: Label[] = this.categorias;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  // public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: this.ppcategoria, label: 'Productos por Categoria' },
  ];


  constructor(public _sProducto: ProductoService,
              public _sWebSocket: WebsocketService) { }

  ngOnInit() {
    this.getPpcategoriaHttp();
    this._sWebSocket.socketProductoCreado().subscribe((data: any) => {
      if(data){
        this.categorias = data.categorias,
        this.barChartLabels = this.categorias;

        this.ppcategoria = data.ppcategoria;
        this.barChartData[0].data = this.ppcategoria; 
      }
      
    })
  }

  getPpcategoriaHttp(){
    this._sProducto.getPpCategoria().subscribe((data : any) => {
      if(data.ok){
        console.log(data);
        this.categorias = data.content.categorias;
        this.barChartLabels = this.categorias; 
        this.ppcategoria = data.content.ppcategoria;
        this.barChartData[0].data = this.ppcategoria;  
      }
    });
  }

}
