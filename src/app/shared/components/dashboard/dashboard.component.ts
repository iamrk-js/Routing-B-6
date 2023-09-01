import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, interval, map } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UnsubscribeService } from '../../services/unsubscribe.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy{
  private unsubscribe$ : Subject<void> = new Subject<void>()
  constructor(private _router : Router, private _unsubscribeService : UnsubscribeService) { }
 interval$ = interval(1000);
  ngOnInit(): void   { 
    // this.unsubscribe$ = this._unsubscribeService.unsubscribe$;
    this.interval$
    .pipe(
      takeUntil(this.unsubscribe$),
      map((ele) => `Cosumed for 1st time and value is ${ele}`)
    )
    .subscribe(console.log);
    this.interval$
    .pipe(
      takeUntil(this.unsubscribe$),
      map(ele => `Cosumed for 2nd time and value is ${ele}`)

    )
    .subscribe(console.log);
    this.interval$
    .pipe(
      takeUntil(this.unsubscribe$),
      map(ele => `Cosumed for 3rd time and value is ${ele}`)
    )
    .subscribe(console.log);

  } 

  onUserClick(){
    // if this API works then redirect to Users 
    this._router.navigate(['/users']);
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }
}
