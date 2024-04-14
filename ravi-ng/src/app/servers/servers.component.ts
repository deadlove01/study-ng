import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit{

  allowServer : boolean = false;
  serverCreatedStatus: string = "No server was created!";
  serverName: string;


  ngOnInit(): void {
    setTimeout(() =>{
      this.allowServer = !this.allowServer;
    }, 2000);
  }

  onBtnServerClick():void {
    this.serverCreatedStatus = "server has been created!. Name is " + this.serverName;
  }

}
