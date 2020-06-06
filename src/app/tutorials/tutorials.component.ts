import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css']
})
export class TutorialsComponent implements OnInit {

  private channelShown: boolean;
  activeChannel: number;
  constructor() { }

  ngOnInit(): void {
    this.activeChannel = 0;
    this.channelShown = false;
  }
  switchChannel(channel: number): void {
    this.activeChannel = channel;
    this.channelSwitched = true;
  }
  get channelSwitched(): boolean {
    return this.channelShown;
  }

  set channelSwitched(yesNo: boolean) {
    this.channelShown = yesNo;

    if (yesNo) {
      setTimeout(() => {
        this.channelSwitched = false;
      }, 2000);
    }
  }
}
