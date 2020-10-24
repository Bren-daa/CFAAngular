import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactThibaultPage } from './contact-thibault.page';

describe('ContactThibaultPage', () => {
  let component: ContactThibaultPage;
  let fixture: ComponentFixture<ContactThibaultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactThibaultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactThibaultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
