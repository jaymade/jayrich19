import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandoComponent } from './cando.component';

describe('CandoComponent', () => {
  let component: CandoComponent;
  let fixture: ComponentFixture<CandoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
