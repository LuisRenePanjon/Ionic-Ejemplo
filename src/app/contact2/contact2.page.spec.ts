import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Contact2Page } from './contact2.page';

describe('Contact2Page', () => {
  let component: Contact2Page;
  let fixture: ComponentFixture<Contact2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contact2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Contact2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
