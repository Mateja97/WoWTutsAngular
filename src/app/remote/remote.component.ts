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
    this.talents.set('Shaman', ['Elemental', 'Restoration', 'Enhancement']);
    this.talents.set('Mage', ['Frost', 'Arcane', 'Fire']);
    this.talents.set('Priest', ['Discipline', 'Holy', 'Shadow']);
    this.talents.set('Death Knight', ['Frost', 'Blood', 'Unholy']);
    this.talents.set('Rogue', ['Subtlety', 'Combat', 'Assassination']);
    this.talents.set('Warrior', ['Fury', 'Arms', 'Protection']);
    this.talents.set('Warlock', ['Demonology', 'Affliction', 'Destruction']);
    this.talents.set('Paladin', ['Retribution', 'Holy', 'Protection']);
    this.talents.set('Druid', ['Feral', 'Restoration', 'Balance']);
    this.talents.set('Hunter', ['Beast Mastery', 'Marksmanship', 'Survival']);
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
