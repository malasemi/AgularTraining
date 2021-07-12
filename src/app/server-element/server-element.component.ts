import { 
  AfterViewChecked,
  AfterContentChecked, 
  AfterContentInit, 
  AfterViewInit, 
  Component, 
  DoCheck, 
  Input, 
  OnChanges, 
  OnInit, 
  SimpleChanges, 
  ViewEncapsulation,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})

export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
 {
  @Input('srvElement') element: { type: string, name: string, content: string };// we take this value from the parent component
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;
  
  constructor() { 
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);    
    console.log('Paragraph element reference' + this.paragraph.nativeElement.textContent);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Text Content ' + this.header.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');    
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit Called!');
    console.log('Paragraph element reference ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Called!');    
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit Called!');
    console.log('Text Content ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Called!');    
  }
  ngOnDestroy() {
    console.log('ngOnDestroy Called!');    
  }

}
