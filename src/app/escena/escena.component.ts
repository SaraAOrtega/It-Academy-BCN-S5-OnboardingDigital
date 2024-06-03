import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { iStep } from '../i.step';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule, MatIconModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.css',
  animations: [
    trigger('animSlider', [
      transition(':increment', [
        style({ transform: 'translateY(-100%)' }),
        animate('.4s ease-out', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':decrement', [
        style({ transform: 'translateY(-100%)' }),
        animate('.4s ease-out', style({ transform: 'translateX(0%)' })),
      ])
    ])
  ]
})
export class EscenaComponent {
  @Input() consejos: iStep[] = []; 
  currentStep: number = 0;

  back(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  next(): void {
    if (this.currentStep < this.consejos.length - 1) {
      this.currentStep++;
    }
  }

selectCard(index: number): void {
  this.currentStep = index; 
}

}

