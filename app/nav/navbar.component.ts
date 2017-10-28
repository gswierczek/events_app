import {Component} from '@angular/core';

@Component({
    selector: 'nav-bar',
    styles: [`
        .nav.navbar {font-size: 15px;}
        #searchForm {margin-right: 100px;}
        @media (max-width: 1200px) {#searchForm {display: none}
            
        }
    `],
    templateUrl: 'app/nav/navbar.component.html'
})
export class NavBarComponent {

}
