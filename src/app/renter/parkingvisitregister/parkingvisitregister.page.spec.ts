import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParkingvisitregisterPage } from './parkingvisitregister.page';

describe('ParkingvisitregisterPage', () => {
  let component: ParkingvisitregisterPage;
  let fixture: ComponentFixture<ParkingvisitregisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingvisitregisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParkingvisitregisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
