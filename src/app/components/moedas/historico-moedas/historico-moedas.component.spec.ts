import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoMoedasComponent } from './historico-moedas.component';

describe('HistoricoMoedasComponent', () => {
  let component: HistoricoMoedasComponent;
  let fixture: ComponentFixture<HistoricoMoedasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoMoedasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoMoedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
