import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDeudaComponent } from './registro-deuda.component';

describe('RegistroDeudaComponent', () => {
  let component: RegistroDeudaComponent;
  let fixture: ComponentFixture<RegistroDeudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroDeudaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroDeudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
