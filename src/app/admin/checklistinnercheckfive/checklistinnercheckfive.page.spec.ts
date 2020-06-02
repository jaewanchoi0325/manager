import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChecklistinnercheckfivePage } from './checklistinnercheckfive.page';

describe('ChecklistinnercheckfivePage', () => {
  let component: ChecklistinnercheckfivePage;
  let fixture: ComponentFixture<ChecklistinnercheckfivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistinnercheckfivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChecklistinnercheckfivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
