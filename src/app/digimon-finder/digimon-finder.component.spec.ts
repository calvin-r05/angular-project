import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonFinderComponent } from './digimon-finder.component';

describe('DigimonFinderComponent', () => {
  let component: DigimonFinderComponent;
  let fixture: ComponentFixture<DigimonFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigimonFinderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigimonFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
