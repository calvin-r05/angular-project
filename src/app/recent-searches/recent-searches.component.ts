import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DigimonApiService } from '../services/digimon-api.service';
import { APIResponse } from '../interfaces/apiresponse';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs';
import { Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpRequest, HttpResponse } from '@angular/common/http';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-recent-searches',
  imports: [AppComponent, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './recent-searches.component.html',
  styleUrl: './recent-searches.component.css'
})
export class RecentSearchesComponent {
  @Output() digimonDeletedEvent = new EventEmitter<string>()
  ngOnInit(): void {
    this.refreshDigimon();}

constructor(private _digimonService: DigimonApiService) {}
public digimonData:APIResponse | any;

  getDigimon() {
  this._digimonService.getDigimonDatabase().subscribe(digimonData =>
    { this.digimonData = digimonData
  });
  }


refreshDigimon() {
  this.getDigimon();
}

deleteDigimon(digimonId:string) { 
    this._digimonService.delDigimonDetails(digimonId).subscribe(result =>
      { 
        console.log(result);
        this.refreshDigimon();
      }
    );
    this.digimonDeletedEvent.emit("digimon got deleted")
    
}
}
