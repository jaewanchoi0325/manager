import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PricedetailPage } from './pricedetail.page';

describe('PricedetailPage', () => {
  let component: PricedetailPage;
  let fixture: ComponentFixture<PricedetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricedetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PricedetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
