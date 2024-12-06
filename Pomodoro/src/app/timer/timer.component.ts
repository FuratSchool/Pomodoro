import { TimerService, TimerMode } from './../services/timer.service';
import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [DecimalPipe, CommonModule],
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  activeMode: TimerMode = TimerMode.Pomodoro; // Set default mode to Pomodoro

  constructor(public TimerService: TimerService) { }

  TimerMode = TimerMode;

  switchMode(mode: TimerMode) {
    this.activeMode = mode;
    this.TimerService.switchMode(mode);
  }
  toggleTimer() {
    this.TimerService.isRunning ? this.TimerService.pauseTimer() : this.TimerService.startTimer();
  }
}
