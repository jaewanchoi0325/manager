import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChecklistinnercheckfourPage } from './checklistinnercheckfour.page';

describe('ChecklistinnercheckfourPage', () => {
  let component: ChecklistinnercheckfourPage;
  let fixture: ComponentFixture<ChecklistinnercheckfourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistinnercheckfourPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChecklistinnercheckfourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
