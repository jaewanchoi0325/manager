import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagerbuildingdetailPage } from './managerbuildingdetail.page';

describe('ManagerbuildingdetailPage', () => {
  let component: ManagerbuildingdetailPage;
  let fixture: ComponentFixture<ManagerbuildingdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerbuildingdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerbuildingdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
