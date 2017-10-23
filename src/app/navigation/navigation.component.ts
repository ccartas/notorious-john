import { Component, HostListener, ElementRef } from '@angular/core'
import {
    trigger,
    state,
    style,
    animate,
    transition
  } from '@angular/animations';

@Component({
    moduleId: module.id,
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css'],
    animations: [
        trigger('scrollAnim', [
          state('show', style({
            display: "none",
            opacity: 0,
            transform: "translateX(-100%)"
          })),
          state('hide',   style({
            display: "block",
            opacity: 1,
            transform: "translateX(0)"
          })),
          transition('show => hide', animate('700ms ease-out')),
          transition('hide => show', animate('700ms ease-in'))
        ]),
        trigger('scrollAnimation', [
          state('show', style({
            background: "white",
            display: "block",
            opacity: 1,
            transform: "translateX(0)"
          })),
          state('hide',   style({
            display: "none",
            opacity: 0,
            transform: "translateX(-100%)"
          })),
          transition('show => hide', animate('700ms ease-out')),
          transition('hide => show', animate('700ms ease-in'))
        ])
        
      ]
})
export class NavComponent {
    
    title = 'The Notorious John';
    animation = 'assets/images/pic.gif';
    logo = 'assets/images/logo1.png';
    scrollLogo = 'assets/images/logo.png'
    state = 'hide'
    constructor(public el: ElementRef) { }
  
    @HostListener('window:scroll', ['$event'])
      checkScroll() {
        const scrollPosition = window.pageYOffset
        console.log(scrollPosition)
        if (scrollPosition > 0) {
          this.state = 'show'
        } else {
          this.state = 'hide'
        }
      }
}