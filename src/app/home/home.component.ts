// src/app/components/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { EscenaComponent } from '../escena/escena.component';
import { StepsService } from '../services/steps.service';
import { iStep } from '../i.step';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EscenaComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  consejosOnBoarding: iStep[] = [];

  constructor(public stepsService: StepsService) { }

  ngOnInit(): void {
    this.consejosOnBoarding = this.stepsService.getSteps();
  }
}