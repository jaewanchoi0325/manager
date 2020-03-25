import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OwneropiniondetailPage } from './owneropiniondetail.page';

describe('OwneropiniondetailPage', () => {
  let component: OwneropiniondetailPage;
  let fixture: ComponentFixture<OwneropiniondetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwneropiniondetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OwneropiniondetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
