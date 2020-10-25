import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecettesTypePage } from './recettes-type.page';

describe('RecettesTypePage', () => {
  let component: RecettesTypePage;
  let fixture: ComponentFixture<RecettesTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecettesTypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecettesTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
