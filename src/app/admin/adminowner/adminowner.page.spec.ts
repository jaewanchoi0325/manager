import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminownerPage } from './adminowner.page';

describe('AdminownerPage', () => {
  let component: AdminownerPage;
  let fixture: ComponentFixture<AdminownerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminownerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminownerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
