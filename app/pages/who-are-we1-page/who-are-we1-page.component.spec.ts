import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoAreWe1PageComponent } from './who-are-we1-page.component';

describe('WhoAreWe1PageComponent', () => {
  let component: WhoAreWe1PageComponent;
  let fixture: ComponentFixture<WhoAreWe1PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhoAreWe1PageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhoAreWe1PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
