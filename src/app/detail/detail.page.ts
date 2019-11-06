import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Chart} from 'chart.js';
import * as firebase from 'firebase';
@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
    @ViewChild('barCanvas', null) lineCanvas: ElementRef;
    data: any;
    name: string;
    waste: any;
    penalty: any;
    private lineChart: Chart;
    public items: Array<{weight:number}> = [];

    ref = firebase.database().ref('/');
    constructor(private route: ActivatedRoute, private router: Router) {
        this.route.queryParams.subscribe(params => {
            if (params && params.item) {
                this.data = JSON.parse(params.item);
                console.log(this.data);
            }
        });

        //
    }


    getStudentDetails(d, name){
        //console.log(d);
          var out = {"Food Wasted":0, "Date":"Null"}
          var keys = Object.keys(d);
          keys.forEach(function(k){
              var data = d[k];
              if (data.StudentName == name){
                  //console.log("here",data);
                  out = data;
              }else{
                  //console.log(data.StudentName,name);
              }
          }) 


          return out;
      }
     
    getTotWaste()
  {
    var name = this.data.name;
    var that = this;
    var dates = [];
    var wts = [];
    //
    //.then(fn)
    //.catch
    // Promise -> Then((networkData)=>{return Animal}).Then((animal)=>{}).Then() => Promise=>Catch()
    this.ref.once('value').then(function(data)
    {
          var datafetched = data.val(); 
          console.log(datafetched);
          var keys = Object.keys(datafetched);
          
          keys.forEach(function(k){
              var i = 1;
              if(datafetched[k].Degree == undefined){
                var data = datafetched[k];
                var x = that.getStudentDetails(data,name);
                dates.push(x.Date);
                wts.push(x["Food Wasted"]);
                console.log();
                  //var add = {weight:};
                  //that.items.push(add);
              }
          i++;});

          console.log(wts,dates);
          
          that.PlotGraph(wts,dates);
          //console.log(data.val().StudentName);
         // console.log(data.val().Degree);

    }).catch(function(err){
        console.log(err);
    })





  }
    ngOnInit() {
        console.log(this.data);
        this.getTotWaste();
        this.name = this.data.name;

    }

    PlotGraph(data,labels){        
        console.log(this.data);
        //this.getTotWaste();
        this.name = this.data.name;
        var tot = 0;
        for(var i = 0;i<data.length;i++)
        {
            tot = tot + data[i];
        }
        this.waste = tot
        this.penalty = tot*0.1;

        this.lineChart = new Chart(this.lineCanvas.nativeElement, {
            type: "bar",
            data: {
                labels: labels,
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
                        borderWidth: 1,
                        pointHitRadius: 10,
                        data: data,
                        spanGaps: false

                        
                    }

                ]
            }
        });

        
    }
   

}
