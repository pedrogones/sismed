import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../side-bar/sidebar/sidebar.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

}
