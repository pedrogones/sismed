import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { SidebarComponent } from '../side-bar/sidebar/sidebar.component';

@Component({
  selector: 'app-render',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, SidebarComponent],
  templateUrl: './render.component.html',
  styleUrl: './render.component.scss'
})
export class RenderComponent {

}
