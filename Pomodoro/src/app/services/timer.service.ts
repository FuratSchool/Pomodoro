import { Injectable } from "@angular/core";

//TimerMode enum
export enum TimerMode {
  Pomodoro = 'pomodoro',
  ShortBreak = 'shortBreak',
  LongBreak = 'longBreak'
}

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private defaultTimes = {
    [TimerMode.Pomodoro]: 25,
    [TimerMode.ShortBreak]: 5,
    [TimerMode.LongBreak]: 15,
  };

  isRunning = false;
  minutes: number = this.defaultTimes[TimerMode.Pomodoro];
  seconds = 0;
  private intervalId: any;

  // Start or resume the timer
  startTimer() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.intervalId = setInterval(() => this.updateTime(), 1000);
    }
  }

  // Pause the timer
  pauseTimer() {
    this.clearTimer();
  }

  // Stop and reset the timer
  resetTimer() {
    this.clearTimer();
    this.minutes = this.defaultTimes[TimerMode.Pomodoro];
    this.seconds = 0;
  }

  // Switch timer modes with enum
  switchMode(mode: TimerMode) {
    this.clearTimer();
    this.minutes = this.defaultTimes[mode];
    this.seconds = 0;
  }

  // Private method to update time
  private updateTime() {
    if (this.seconds === 0) {
      if (this.minutes === 0) {
        this.resetTimer();  // reset when the timer ends
      } else {
        this.minutes--;
        this.seconds = 59;
      }
    } else {
      this.seconds--;
    }
  }

  // Clear interval helper
  private clearTimer() {
    this.isRunning = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
