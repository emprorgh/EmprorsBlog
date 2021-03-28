import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public chartData = [(Math.random()*100 + 1), (Math.random()*100 + 1)];
  public chartDataLabels = ['Automation', 'Manual'];
  constructor() { }

  ngOnInit() {
  }

  doughnutChartLabels: Label[] = this.chartDataLabels;
  doughnutChartData: MultiDataSet = [
    this.chartData
  ];
  doughnutChartType: ChartType = 'doughnut';

}
