import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContractPage } from './contract.page';

describe('ContractPage', () => {
  let component: ContractPage;
  let fixture: ComponentFixture<ContractPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContractPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
