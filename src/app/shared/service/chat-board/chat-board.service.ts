import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatBoardService {
    private openSearchSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public openSearch$ = this.openSearchSubject.asObservable();
    private isActiveSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public isActive$ = this.isActiveSubject.asObservable();
    
    public isActive: boolean = true;

    
  toggleActiveState() {
    this.isActiveSubject.next(!this.isActiveSubject.value);
  }
  
    setOpenSearch(open: boolean) {
      this.openSearchSubject.next(open);
    }
}
