import { Component } from '@angular/core';
import { DigimonApiService } from '../services/digimon-api.service';
import { APIResponse } from '../interfaces/apiresponse';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-digimon-finder',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './digimon-finder.component.html',
  styleUrl: './digimon-finder.component.css'
})
export class DigimonFinderComponent {
digimonData: APIResponse | undefined;
  errorMessage: string = '';
  buttonClickedCheck :boolean = false

  constructor(private _digimonService: DigimonApiService) {}

  buttonClicked(){
      this.buttonClickedCheck = true
  }
  getDigimonDetails(digimonName: string): boolean {
    
    this._digimonService.getDigimonData(digimonName).subscribe(
      (data: APIResponse[]) => {
        if (data.length > 0) {
          this.digimonData = data[0];
          this.buttonClicked();
          if (this.digimonData.img)
          {
          this._digimonService.sendDigimonDetails(data[0]).subscribe({})
          }
          this.errorMessage = '';
        } else {
          this.digimonData = undefined;
          this.errorMessage = 'No Digimon found.';
        }
      },
      (error) => {
        this.digimonData = undefined;
        this.errorMessage = 'Error fetching data.';
      }
    );
    return false;
}
}
