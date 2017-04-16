import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('simpleMDE') textarea: ElementRef;

  public simplemde;

  constructor(private elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngAfterViewInit() {
    if (this.platformId === 'browser') {
      System.import('simplemde').then(SimpleMDE => {
        this.simplemde = new SimpleMDE(
          {
            element: this.textarea.nativeElement.value,
          }
        );
      });
    }
  }
}


