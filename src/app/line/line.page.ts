import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-line',
  templateUrl: 'line.page.html',
  styleUrls: ['line.page.scss'],
})
export class LinePage {
  @ViewChild('lineChart') lineChart;
  @ViewChild('hrzLineChart') hrzLineChart;
  @ViewChild('hrzLineChart2') hrzLineChart2;
  @ViewChild('hrzLineChart3') hrzLineChart3;

  lines: any;
  hrzLines: any;
  hrzLines2: any;
  hrzLines3: any;
  colorArray: any;
  constructor() { }

  ionViewDidEnter() {
    this.createAreaChart();
    this.createSimpleLineChart()
    this.createGroupLineChart()
    this.createHrzLineChart3()
  }

  createAreaChart() {
    this.lines = new Chart(this.lineChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Viewers in millions',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
          backgroundColor: 'rgb(38, 194, 129)',
          borderColor: 'rgb(38, 194, 129)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  createSimpleLineChart() {
    this.hrzLines = new Chart(this.hrzLineChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Viewers in millions',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgb(38, 194, 129)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  createGroupLineChart() {
    this.hrzLines2 = new Chart(this.hrzLineChart2.nativeElement, {
      type: 'line',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Online viewers in millions',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgb(38, 194, 129)',
          borderWidth: 1
        },
        {
          label: 'Offline viewers in millions',
          data: [1.5, 2.8, 3, 4.9, 4.9, 5.5, 7, 12],
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgb(242, 38, 19)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  createHrzLineChart3() {
    let ctx = this.hrzLineChart3.nativeElement
    ctx.height = 400;
    this.hrzLines3 = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Online viewers in millions',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
          backgroundColor: 'rgb(242, 38, 19)',
          borderColor: 'rgb(242, 38, 19)',
          borderWidth: 1
        },
        {
          label: 'Offline viewers in millions',
          data: [1.5, 2.8, 3, 4.9, 4.9, 5.5, 7, 12],
          backgroundColor: 'rgb(38, 194, 129)',
          borderColor: 'rgb(38, 194, 129)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            stacked: true
          }]
        }
      }
    });
  }
}
