import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManagerbuildingPage } from './managerbuilding.page';

describe('ManagerbuildingPage', () => {
  let component: ManagerbuildingPage;
  let fixture: ComponentFixture<ManagerbuildingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerbuildingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerbuildingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
