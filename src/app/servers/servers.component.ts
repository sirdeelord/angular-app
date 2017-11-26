import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = 'Testserver';
  serverCreated = false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCerverCreateSever() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    //console.log(event);
    this.serverName =(<HTMLInputElement>event.target).value;
  }

}
