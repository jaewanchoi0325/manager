import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RenteropiniondetailPage } from './renteropiniondetail.page';

describe('RenteropiniondetailPage', () => {
  let component: RenteropiniondetailPage;
  let fixture: ComponentFixture<RenteropiniondetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenteropiniondetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RenteropiniondetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
