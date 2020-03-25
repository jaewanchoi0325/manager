import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarketbuyPage } from './marketbuy.page';

describe('MarketbuyPage', () => {
  let component: MarketbuyPage;
  let fixture: ComponentFixture<MarketbuyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketbuyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarketbuyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
