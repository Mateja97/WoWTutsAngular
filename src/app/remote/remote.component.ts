import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {
  talents = new Map();
  talSelected: string[];
  classSelected: boolean;
  class: string;
  classes: string[] = ['Shaman', 'Mage', 'Priest', 'Death Knight', 'Rogue', 'Warrior', 'Warlock', 'Paladin', 'Druid', 'Hunter'];
  @Output() channelChanged = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
    this.classSelected = false;
    this.talents.set('Shaman', ['ele', 'resto', 'enha']);
    this.talents.set('Mage', ['frost', 'arcane', 'fire']);
    this.talents.set('Priest', ['disco', 'holy', 'shadow']);
    this.talents.set('Death Knight', ['frost', 'blood', 'uh']);
    this.talents.set('Rogue', ['sub', 'com', 'asa']);
    this.talents.set('Warrior', ['fury', 'arms', 'prot']);
    this.talents.set('Warlock', ['demo', 'aff', 'destro']);
    this.talents.set('Paladin', ['ret', 'holy', 'prot']);
    this.talents.set('Druid', ['feral', 'resto', 'bal']);
    this.talents.set('Hunter', ['bm', 'mm', 'surv']);
  }
  changeChannel(channel: number){
    this.channelChanged.emit(channel);
  }
  indexOfClass(): number{
    return this.classes.indexOf(this.class);
  }
   talentsFromClass(classSelected: string){
    this.classSelected = true;
    this.class = classSelected;
    this.talSelected = this.talents.get(classSelected);
  }
  getclassSelected(): boolean{
    return this.classSelected;
  }

}
