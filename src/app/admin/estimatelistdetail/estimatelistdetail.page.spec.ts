import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstimatelistdetailPage } from './estimatelistdetail.page';

describe('EstimatelistdetailPage', () => {
  let component: EstimatelistdetailPage;
  let fixture: ComponentFixture<EstimatelistdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimatelistdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstimatelistdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
