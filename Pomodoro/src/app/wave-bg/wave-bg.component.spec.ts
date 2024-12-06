import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveBGComponent } from './wave-bg.component';

describe('WaveBGComponent', () => {
  let component: WaveBGComponent;
  let fixture: ComponentFixture<WaveBGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaveBGComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaveBGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
