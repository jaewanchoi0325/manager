import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContractextensionPage } from './contractextension.page';

describe('ContractextensionPage', () => {
  let component: ContractextensionPage;
  let fixture: ComponentFixture<ContractextensionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractextensionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContractextensionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
