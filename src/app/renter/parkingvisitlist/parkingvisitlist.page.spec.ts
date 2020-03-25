import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParkingvisitlistPage } from './parkingvisitlist.page';

describe('ParkingvisitlistPage', () => {
  let component: ParkingvisitlistPage;
  let fixture: ComponentFixture<ParkingvisitlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingvisitlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParkingvisitlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
