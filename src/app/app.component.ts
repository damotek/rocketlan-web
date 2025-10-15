import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onRegister() {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSfhHQwHSnbbFxLvfhREN_uwA0kj4A8rWd7QCdwm_vjhzMnU_g/viewform?usp=dialog',
      '_blank'
    );
  }

  onInfo() {
    alert('Mais informações em breve!');
  }

  onDiscord() {
    window.open('https://discord.gg/seu-link-aqui', '_blank');
  }
}
