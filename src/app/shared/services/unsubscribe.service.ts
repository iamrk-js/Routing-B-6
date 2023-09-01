import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsubscribeService {
   unsubscribe$: Subject<void> = new Subject<void>();
  constructor() { }
}
