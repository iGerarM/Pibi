import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RightSidebarService {
  private closeClickSubject = new Subject<void>();
  closeClick$ = this.closeClickSubject.asObservable();

  emitCloseClick(): void {
    this.closeClickSubject.next();
  }
}
