import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParkingvisitlistdetailPage } from './parkingvisitlistdetail.page';

describe('ParkingvisitlistdetailPage', () => {
  let component: ParkingvisitlistdetailPage;
  let fixture: ComponentFixture<ParkingvisitlistdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingvisitlistdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParkingvisitlistdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
