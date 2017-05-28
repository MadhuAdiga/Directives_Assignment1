import { Component, OnInit, Directive } from '@angular/core'; //Import Component and ngOnInit dependenicies
import { AppServices } from './app.services' // Import AppService 


@Component({
  selector: 'my-app',
  template: `<div class="container container-fluid">
             <h2>Directives and styling using structural directives</h2><br>
             <h4>The data for the below table is provided by a service and is styled by a structural directive</h4><br><br>
             <table class="table table-bordered">
                <thead>
                    <tr [ngClass]="{classTableHead:true}">
                        <th>Name</th>
                        <th>DOB</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Enroll link</th>
                </thead>
                <tbody>
                    <tr  *ngFor="let cartoon of cartoons" [ngClass]="{classTableBody:true}">
                        <td>{{cartoon.name}}</td>
                        <td>{{cartoon.DOB}}</td>
                        <td>{{cartoon.email}}</td>
                        <td>{{cartoon.status}}</td>
                        <td>{{cartoon.enroll}}</td>
                    </tr>
                </tbody>
             </table>
             </div>`,
  styles: [`
            .classTableHead {background-color:	#ffa69f;
                             border: 3px solid #ffb69f}
            .classTableBody {background-color:	#ffe69f;
                             border: 3px solid #ffd69f}
         `]// Two styles are defined, one for the table head and one for the table body
})


export class AppComponent implements OnInit { // Export a class AppComponent 
        cartoons = [{}]; //Declare an array of objects
        constructor(private _appServives : AppServices){} //Declare a private variable of the type AppServices
        
        ngOnInit(){
            this.cartoons = this._appServives.getData() //Run OnInit which assigns the variable to the data fetched by the getData function of the AppServices
        }

} 

    
    

