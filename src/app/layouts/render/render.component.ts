import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { SidebarComponent } from '../side-bar/sidebar/sidebar.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-render',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, SidebarComponent, SpinnerComponent, CommonModule],
  templateUrl: './render.component.html',
  styleUrl: './render.component.scss'
})
export class RenderComponent {
isLoading: any;

}
