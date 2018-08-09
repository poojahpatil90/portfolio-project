import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Output() scrollTo = new EventEmitter<String>();

  typed = '';
  private txt = 'Web/Mobile apps Developer';
  private speed = 50;
  private i = 0;

  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;

  constructor() { }

  ngOnInit() {
    this.myStyle = {
      position: 'absolute',
      'width': '100%',
      'height': '100vh',
      'z-index': 10,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0
    };

    this.myParams = {
      particles: {
        number: {
          value: 100,
        },
        color: {
          value: '#f7f5f5'
        },
        shape: {
          type: 'circle',
        },
      },
      interactivity: {
        events: {
          onhover: {
            mode: ['bubble', 'repulse']
          }
        }
      }
    };

    this.typeWriter();
  }

  typeWriter() {
    if (this.i < this.txt.length) {
      this.typed += this.txt[this.i];
      this.i += 1;
      setTimeout(() => {
        this.typeWriter();
      }, this.speed);
    }
  }

  scrollDown(page) {
    this.scrollTo.emit(page);
  }

}
