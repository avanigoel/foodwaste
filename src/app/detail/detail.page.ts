import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Chart} from 'chart.js';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
    @ViewChild('barCanvas', null) lineCanvas: ElementRef;
    data: any;
    name: string;
    private lineChart: Chart;


    constructor(private route: ActivatedRoute, private router: Router) {
        this.route.queryParams.subscribe(params => {
            if (params && params.item) {
                this.data = JSON.parse(params.item);
            }
        });
    }

    ngOnInit() {
        console.log(this.data);
        this.name = this.data.name;

        this.lineChart = new Chart(this.lineCanvas.nativeElement, {
            type: "line",
            data: {
                labels: ["31 Aug. '19", "1 Sept. '19", "2 Sept. '19", "3 Sept. '19", "4 Sept. '19", "5 Sept. '19", "6 Sept. '19"],
                datasets: [
                    {
                        label: "Food wasted by " + this.name,
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(255,0,0,0.4)",
                        borderColor: "rgba(255,0,0,1)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgba(255,0,0,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(255,0,0,1)",
                        pointHoverBorderColor: "rgba(255,0,0,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 55, 40],
                        spanGaps: false

                        
                    }

                ]
            }
        });

        
    }
   

}
