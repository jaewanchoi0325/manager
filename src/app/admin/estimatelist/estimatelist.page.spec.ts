import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstimatelistPage } from './estimatelist.page';

describe('EstimatelistPage', () => {
  let component: EstimatelistPage;
  let fixture: ComponentFixture<EstimatelistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimatelistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstimatelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
