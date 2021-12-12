import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRegistroLeDeboComponent } from './lista-registro-le-debo.component';

describe('ListaRegistroLeDeboComponent', () => {
  let component: ListaRegistroLeDeboComponent;
  let fixture: ComponentFixture<ListaRegistroLeDeboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRegistroLeDeboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRegistroLeDeboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
