import { Component, OnInit, OnChanges, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent implements OnInit, OnChanges{
  
  
  ngOnInit(){
    document.getElementById('gif').onload = () => {
      let img = document.getElementById('gif')
      let navigation = document.getElementById('navigation')
      document.getElementById('dashboard').style.height = img.clientHeight+ navigation.clientHeight +'px';
  } 
}
  ngOnChanges(){
    console.log('s-a apelat')
  }
}
