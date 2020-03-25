import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarketsellPage } from './marketsell.page';

describe('MarketsellPage', () => {
  let component: MarketsellPage;
  let fixture: ComponentFixture<MarketsellPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketsellPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarketsellPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
