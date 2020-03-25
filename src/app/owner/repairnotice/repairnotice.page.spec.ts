import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RepairnoticePage } from './repairnotice.page';

describe('RepairnoticePage', () => {
  let component: RepairnoticePage;
  let fixture: ComponentFixture<RepairnoticePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairnoticePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RepairnoticePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
