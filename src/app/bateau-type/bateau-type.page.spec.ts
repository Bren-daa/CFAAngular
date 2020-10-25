import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BateauTypePage } from './bateau-type.page';

describe('BateauTypePage', () => {
  let component: BateauTypePage;
  let fixture: ComponentFixture<BateauTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BateauTypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BateauTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
