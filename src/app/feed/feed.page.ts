import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {NavigationExtras, Router} from '@angular/router';
import * as firebase from 'firebase';
import {snapshotToArray} from '../../app/firebase';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  @ViewChild('lineCanvas', null) lineCanvas: ElementRef;
    @ViewChild('lineCanvas2', null) lineCanvas2: ElementRef;
    private lineChart: Chart;

    item:string;
    items2 = [];
    ref = firebase.database().ref('/items/');


    public items: Array<{ name: string; id: number }> = [{name: 'Avani', id : 1},{name: 'Parag', id : 2},{name: 'Naman', id : 3},{name: 'Mohit', id : 4},{name: 'Prince', id : 5},{name: 'Manjusha', id : 6}];

    text: string = ""
    posts: any[] = []
    
  constructor(private router: Router) {

    this.getPosts();

   }

  /*getPosts()
  {
      firebase.firestore().collection("posts").get()
      .then((docs) => {

        docs.forEach((doc) => {
            this.posts.push(doc);
            console.log(doc.data().name)
            console.log(doc.data().weight)
        })
        console.log("fetched data")
        console.log(this.posts)
        //console.log(this.posts.data().name)

      }).catch((err) => {
          console.log(err)
      })
  }*/

  /*getPosts()
  {
      this.ref.on('value',resp =>{
          
         this.items2 = snapshotToArray(resp);
      })
      console.log("fetched data is:");
      console.log(this.items2);

      /*firebase.database().ref('items/').on('value',function(snapshot)
      {
          console.log(snapshotToArray(snapshot));
      })*/
      
  //}*/

  /*getPosts()
  {
      let query = firebase.database().ref('items/');

      
  }*/

  /*getPosts()
  {
    firebase.database().ref('0/').once('value').then(function(snapshot) {
        console.log(snapshot.val());
      });
  }*/

  getPosts()
  {
      firebase.database().ref('/items/').once('value').then(function(data)
      {
          console.log(JSON.stringify(data.val));
      })
  }

  async getDummyData() {
    let url = "https://api.thingspeak.com/channels/857483/feeds.json?api_key=5LM40FK6SIHS5H54&results=2"
    let res = await fetch(url)
    if (res.ok){
        let json = await res.json();
        console.log(json);
        //drawChart(json);
    }
} 
openDetailsWithQueryParams(item) {
    const navigationExtras: NavigationExtras = {
        queryParams: {
            item: JSON.stringify(item),
        }
    };
    this.router.navigate(['detail'], navigationExtras);
}
  ngOnInit() {

    this.getDummyData();
        
        this.lineChart = new Chart(this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ["31 Aug. '19", "1 Sept. '19", "2 Sept. '19", "3 Sept. '19", "4 Sept. '19", "5 Sept. '19", "6 Sept. '19"],
                datasets: [
                    {
                        label: "This week total",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [390, 354, 480, 486, 336, 330, 240],
                        spanGaps: false
                    }
                ]
            }
        });

        this.lineChart = new Chart(this.lineCanvas2.nativeElement, {
            type: 'line',
            data: {
                labels: ["31 Aug. '19", "1 Sept. '19", "2 Sept. '19", "3 Sept. '19", "4 Sept. '19", "5 Sept. '19", "6 Sept. '19"],
                datasets: [
                    {
                        label: "This week average",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(255,255,0,0.4)",
                        borderColor: "rgba(255,255,0,1)",
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: "miter",
                        pointBorderColor: "rgba(255,255,0,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(255,255,0,1)",
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

  /*post()
  {
    firebase.firestore().collection("posts").add({
        name:"Avani",
        weight:"50gm"
    }).then((doc)=>{
        console.log(doc)
    }).catch((err)=>{
        console.log(err)
    })
    
  }*/

  post()
  {
      this.item = "Avani";
      let newItem = this.ref.push();
      newItem.set(this.item);
  }

}
