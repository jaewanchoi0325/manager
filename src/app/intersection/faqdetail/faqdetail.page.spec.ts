import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FaqdetailPage } from './faqdetail.page';

describe('FaqdetailPage', () => {
  let component: FaqdetailPage;
  let fixture: ComponentFixture<FaqdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FaqdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
