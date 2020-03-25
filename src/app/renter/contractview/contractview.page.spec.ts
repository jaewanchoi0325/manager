import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContractviewPage } from './contractview.page';

describe('ContractviewPage', () => {
  let component: ContractviewPage;
  let fixture: ComponentFixture<ContractviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContractviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
