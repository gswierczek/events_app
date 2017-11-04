import {Component} from '@angular/core';
import {AuthService} from '../user/auth.service';

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

    constructor(private authService: AuthService) {

    }

}
