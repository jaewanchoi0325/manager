import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContractremovalPage } from './contractremoval.page';

describe('ContractremovalPage', () => {
  let component: ContractremovalPage;
  let fixture: ComponentFixture<ContractremovalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractremovalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContractremovalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
