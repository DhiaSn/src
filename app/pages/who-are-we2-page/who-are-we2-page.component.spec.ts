import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoAreWe2PageComponent } from './who-are-we2-page.component';

describe('WhoAreWe2PageComponent', () => {
  let component: WhoAreWe2PageComponent;
  let fixture: ComponentFixture<WhoAreWe2PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhoAreWe2PageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhoAreWe2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
