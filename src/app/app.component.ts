import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TareasComponent } from './tareas/tareas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TareasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'listatereasdiaria';
}
