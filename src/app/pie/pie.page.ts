import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-pie',
  templateUrl: 'pie.page.html',
  styleUrls: ['pie.page.scss'],
})
export class PiePage {
  @ViewChild('pieChart') pieChart;
  @ViewChild('dnChart') dnChart;
  //http://www.mocky.io/v2/5d286fe02c000066003eda49
  bars: any;
  hrzPies: any;
  dn: any;
  colorArray: any;
  constructor() { }

  ionViewDidEnter() {
    this.generateColorArray(8);
    this.createPieChart();
    this.createDnChart();
  }

  generateColorArray(num) {
    this.colorArray = [];
    for (let i = 0; i < num; i++) {
      this.colorArray.push('#' + Math.floor(Math.random() * 16777215).toString(16));
    }
  }

  createPieChart() {
    this.bars = new Chart(this.pieChart.nativeElement, {
      type: 'pie',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Viewers in millions',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
          backgroundColor: this.colorArray, // array should have same number of elements as number of dataset
          borderColor: this.colorArray,// array should have same number of elements as number of dataset
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

  createDnChart() {
    this.dn = new Chart(this.dnChart.nativeElement, {
      type: 'doughnut',
      circumference: Math.PI,
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Viewers in millions',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
          backgroundColor: this.colorArray, // array should have same number of elements as number of dataset
          borderColor: this.colorArray,// array should have same number of elements as number of dataset
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

}
