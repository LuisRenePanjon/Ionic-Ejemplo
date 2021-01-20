import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EquiposListaPage } from './equipos-lista.page';

describe('EquiposListaPage', () => {
  let component: EquiposListaPage;
  let fixture: ComponentFixture<EquiposListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquiposListaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EquiposListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
