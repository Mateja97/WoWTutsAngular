import { Component, OnInit } from '@angular/core';
import { VideosService } from '../videos.service';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css'],
  providers: [VideosService]
})
export class TutorialsComponent implements OnInit {

  private channelShown: boolean;
  videos: string[];
  activeChannel: number;
  constructor( private videoService: VideosService) { }

  ngOnInit(): void {
    this.videos = this.videoService.videos;
    this.activeChannel = 0;
    this.channelShown = false;
    console.log(this.videos)
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
