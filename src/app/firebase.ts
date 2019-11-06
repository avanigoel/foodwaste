import { element } from 'protractor';

/*const firebaseConfig = {
    apiKey: "AIzaSyASvAwRpX-VHYsYA0sp6sAdntYOXP02I5M",
    authDomain: "foodwastemanagement-17ea8.firebaseapp.com",
    databaseURL: "https://foodwastemanagement-17ea8.firebaseio.com",
    projectId: "foodwastemanagement-17ea8",
    storageBucket: "foodwastemanagement-17ea8.appspot.com",
    messagingSenderId: "766406849095",
    appId: "1:766406849095:web:2e10735dba1df849b7b762",
    measurementId: "G-FB8XFNYCM9"
  }*/

  /*const firebaseConfig = {
    apiKey: "AIzaSyCBXpEiatVDYTM-4cYpn4tLFPRrgfburjA",
    authDomain: "messfood-a1448.firebaseapp.com",
    databaseURL: "https://messfood-a1448.firebaseio.com",
    projectId: "messfood-a1448",
    storageBucket: "messfood-a1448.appspot.com",
    messagingSenderId: "500734339523",
    appId: "1:500734339523:web:8aaedc23fc06df41f47576",
    measurementId: "G-W4G9R96Q2N"
  };*/
  
  const firebaseConfig = {
    apiKey: "AIzaSyBbLDv9ANwSoXYHzl0Tlw5R0elgzpgYYKE",
    authDomain: "foodwaste03.firebaseapp.com",
    databaseURL: "https://foodwaste03.firebaseio.com",
    projectId: "foodwaste03",
    storageBucket: "foodwaste03.appspot.com",
    messagingSenderId: "585763964302",
    appId: "1:585763964302:web:ba88a896c8cb4aa45fd0df",
    measurementId: "G-BTYKCJK136"
  };

  
  export default firebaseConfig

  export const snapshotToArray = snapshot =>{

    let returnArr = [];

  
    /*for(let element in snapshot )
    {
      //let item = element.val();
      //item.key = element.key;
      console.log("element is :"+element);
      returnArray.push(element);
      console.log("in loop");
    }*/

    /*snapshot.forEach(function(childSnapshot) {
      var item = childSnapshot.val();
      item.key = childSnapshot.key;
      console.log("item is:"+item);
      returnArr.push(item);
  });*/

    /*snapshot.foreach(element => {

      let item = element.val();
      item.key = element.key;
      returnArr.push(item);

    });*/
    console.log(snapshot);
    return returnArr;
  }