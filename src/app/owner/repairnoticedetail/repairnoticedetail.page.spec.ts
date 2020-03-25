import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RepairnoticedetailPage } from './repairnoticedetail.page';

describe('RepairnoticedetailPage', () => {
  let component: RepairnoticedetailPage;
  let fixture: ComponentFixture<RepairnoticedetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairnoticedetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RepairnoticedetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
