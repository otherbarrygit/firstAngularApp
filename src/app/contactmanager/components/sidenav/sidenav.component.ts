import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  users: Observable<User[]>;

  constructor(zone: NgZone, private userService: UserService, private router: Router) {
    this.mediaMatcher.addListener(mql =>
      zone.run(() => this.mediaMatcher = mql));
  }

  @ViewChild(MatDrawer) sidenav: MatDrawer;

  ngOnInit() {
    this.users = this.userService.users;
    this.userService.loadAll();

    // this.users.subscribe(data => {
    //   if (data.length > 0) this.router.navigate(['/contact', data[0].id]);
    // });

    this.router.events.subscribe(() => {
      if (this.isScreenSmall())
        this.sidenav.close();
    });
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }
}
