import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultFouterComponent } from './default-fouter.component';

describe('DefaultFouterComponent', () => {
  let component: DefaultFouterComponent;
  let fixture: ComponentFixture<DefaultFouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultFouterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaultFouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
