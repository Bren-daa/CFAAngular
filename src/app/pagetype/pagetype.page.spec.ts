import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagetypePage } from './pagetype.page';

describe('PagetypePage', () => {
  let component: PagetypePage;
  let fixture: ComponentFixture<PagetypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagetypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagetypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
