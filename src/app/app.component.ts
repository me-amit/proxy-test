import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  name = 'Angular 5';
  users = [];

  apiUrl = 'https://jsonplaceholder.typicode.com/users';
  

  GetData() {

const headerDict = {
		  
  'Content-Type': 'application/json',
  'aud':'youraud',
  'Time-Zone':'Asia/Calcutta',
  'Authorization':'yourkey',
}

const requestOptions = {                                                                                                                                                                                 
  headers: new HttpHeaders(headerDict), 
};
  this.apiUrl = '/api/getMetaData';


    this.http.get<any[]>(this.apiUrl,requestOptions)
      .subscribe(data => {
        this.users = data;
      });
	  
  }

  ClearData() {
    this.users = [];
  }

  constructor(private http: HttpClient) {}
  ngOnInit() {}

}
