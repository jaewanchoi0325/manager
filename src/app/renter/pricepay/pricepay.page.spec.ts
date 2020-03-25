import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PricepayPage } from './pricepay.page';

describe('PricepayPage', () => {
  let component: PricepayPage;
  let fixture: ComponentFixture<PricepayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricepayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PricepayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
