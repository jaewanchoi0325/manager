import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParkingregisterPage } from './parkingregister.page';

describe('ParkingregisterPage', () => {
  let component: ParkingregisterPage;
  let fixture: ComponentFixture<ParkingregisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingregisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParkingregisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
