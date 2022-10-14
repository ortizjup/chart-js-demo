import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: number[] = [];
  data2: number[] = [];

  title = 'graficos-angular-example';

  //Barras
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.,
    plugins: {
      legend: {
        display: true,
      }
    }
  };

  datos: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [], label: 'Series A' },
      { data: [], label: 'Series B' }
    ]
  };
  
  //Donuts
  public doughnutChartType: ChartType = 'doughnut'; 
  doughnutChartData: ChartData<'doughnut'> = {
    labels: ["Serie Uno, Serie Dos"],
    datasets: [
      { data: [ 50, 60, 10 ] },
      { data: [ 30, 20, 50 ] }
    ]
  };

  ngOnInit(): void {
    this.getDataBarChar();
  }

  public getDataBarChar(){
    for(let i = 0; i < 2; i++){
      for(let j = 0; i < 5; i++){
        if(i == 1){
          this.data.push(Math.random());
        }
        this.data2.push(Math.random());
      }
    }

    this.datos.labels = [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ];
    this.datos.datasets[0].data = this.data;
    this.datos.datasets[1].data = this.data2;
  }
}
