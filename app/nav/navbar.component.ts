import {Component} from '@angular/core';
import {AuthService} from '../user/auth.service';
import {ISession} from '../events/shared/event.model';
import {EventService} from '../events/shared/event.service';

@Component({
    selector: 'nav-bar',
    styles: [`
        .nav.navbar {font-size: 15px;}
        #searchForm {margin-right: 100px;}
        @media (max-width: 1200px) {#searchForm {display: none}
        li > a.active {color: #F97924; }    
        }
    `],
    templateUrl: 'app/nav/navbar.component.html'
})
export class NavBarComponent {
    searchTerm: string = "";
    foundSessions: ISession[];

    constructor(private authService: AuthService, private eventService: EventService) {

    }
    searchSessions(searchTerm) {
        this.eventService.searchSessions(searchTerm).subscribe(
            sessions => {
                this.foundSessions = sessions;
            }
        )
    }

}
