import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = "Test Name";
  name = "";
  severCreated = false;
  servers = ["TestServer", "TestServer2", "TestServer3"];
  hidden = true;
  current = 1;
  click = [];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(): void {
    this.serverCreationStatus = "Server was created. Name is " + this.serverName;
    this.servers.push(this.serverName);
    this.severCreated = true;
  }

  resetName() {
    this.name = ""
  }

  isNameEmpty(): boolean {
    return this.name === "";
  }

  toggleDisplayDetail(): void {
    this.hidden = !this.hidden;
    this.click.push(this.current);
    this.current = this.current + 1;
  }

  getTextColor(num: number): string {
    if (num >= 5)
      return "white";
    return "black";
  }
}
