import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cookpit',
  templateUrl: './cookpit.component.html',
  styleUrls: ['./cookpit.component.css']
})
export class CookpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // we emit these value to the parent which is the app.component
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName, 
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName, 
      serverContent: this.newServerContent
    });
  }

}
