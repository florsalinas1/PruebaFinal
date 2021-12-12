import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRegistroMeDebeComponent } from './lista-registro-me-debe.component';

describe('ListaRegistroMeDebeComponent', () => {
  let component: ListaRegistroMeDebeComponent;
  let fixture: ComponentFixture<ListaRegistroMeDebeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRegistroMeDebeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRegistroMeDebeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
