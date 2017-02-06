import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  private isVisible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  private toggle() {
    this.isVisible = !this.isVisible;
  }

  private setCircle(){
    return {
      button_effect: this.isVisible
    };
  }

  private setTitle(){
    return {
      hide: this.isVisible,
      glitch: !this.isVisible
    };
  }

}
