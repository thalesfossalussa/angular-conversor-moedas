import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListagemMoedasModule } from './listagem-moedas.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemMoedasComponent } from './listagem-moedas.component';
import { filter } from 'rxjs';

describe('ListagemMoedasComponent', () => {
  let component: ListagemMoedasComponent;
  let fixture: ComponentFixture<ListagemMoedasComponent>;
  const mockListagem = [
    {
      description: "United Arab Emirates Dirham",
      code: "AED"
    },
    {
      description: "Afghan Afghani",
      code: "AFN"
    },
    {
      description: "Albanian Lek",
      code: "ALL"
    },
    {
      description: "Armenian Dram",
      code: "AMD"
    },
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemMoedasComponent ],
      imports: [
        ListagemMoedasModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemMoedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load listagem', () => {
    component.listagem.data = mockListagem;
    fixture.detectChanges();
    expect(component.listagem.data).toBeDefined();
  });

});
