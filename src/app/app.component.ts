import { Component, OnInit } from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-content';

  ngOnInit(): void {

   

    // document.addEventListener("click", eve => {
    //   console.log(eve);
    // })
    // let counter = 0
    // setInterval(() => {
    //   console.log(counter);
    //   counter++;
    // }, 1000)

    // setTimeout(() => {
    //   console.log(`Data is Fetched`);
    // }, 3000)
  }
}
