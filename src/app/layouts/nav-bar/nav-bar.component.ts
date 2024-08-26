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

foto = this.photoProfile("Pedro");
  photoProfile(name: string): string {
    const trimmedName = name.trim();
    const initials = trimmedName.split(' ').map(segment => segment.charAt(0)).join('');
    const apiUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=random&color=ffffff&size=200&rounded=true&bold=true&format=svg&length=1&uppercase=true`;
    return apiUrl;
  }


}
