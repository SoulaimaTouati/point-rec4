import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AprsidebarService {


  private isOpenSubject = new BehaviorSubject<boolean>(true);
  isOpen$ = this.isOpenSubject.asObservable();

  constructor() { }

  openSidebar() {
    this.isOpenSubject.next(true);
  }

  closeSidebar() {
    this.isOpenSubject.next(false);
  }

}
