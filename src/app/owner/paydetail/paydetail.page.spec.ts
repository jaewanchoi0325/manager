import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaydetailPage } from './paydetail.page';

describe('PaydetailPage', () => {
  let component: PaydetailPage;
  let fixture: ComponentFixture<PaydetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaydetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaydetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
