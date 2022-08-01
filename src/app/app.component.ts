import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ali Can Yücel Kronometre Uygulaması';
  interval:any;
  time=new Date();
  startTimer()
  {
    this.interval=setInterval(()=>{
      this.time.setSeconds(this.time.getSeconds()+1)
    },1000);
  }
  pauseTimer()
  {
    clearInterval(this.interval);
  }
  resetTimer()
  {
    this.time.setSeconds(0);
    this.time.setMinutes(0);
    this.time.setTime(0);
  }
}
