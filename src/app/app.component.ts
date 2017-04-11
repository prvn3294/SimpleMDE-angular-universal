import { Component, OnInit, AfterViewInit, ElementRef, ViewChild,Inject } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

var SimpleMDE = require('simplemde');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{  
  @ViewChild('simpleMDE') textarea : ElementRef;

  constructor(private elementRef: ElementRef,
    private activated_route: ActivatedRoute,    
    @Inject(PLATFORM_ID) private platformId: Object
    ) { }


  public simplemde;  

  ngAfterViewInit() {  
    this.simplemde = new SimpleMDE(
      {
         element: this.textarea.nativeElement.value,                
      }
    );
  }
}
    
    
