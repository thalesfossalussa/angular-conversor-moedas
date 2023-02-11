import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HistoricoMoedasModule } from './historico-moedas.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoMoedasComponent } from './historico-moedas.component';

describe('HistoricoMoedasComponent', () => {
  let component: HistoricoMoedasComponent;
  let fixture: ComponentFixture<HistoricoMoedasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoMoedasComponent ],
      imports: [
        HistoricoMoedasModule,
        BrowserAnimationsModule
      ]
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
