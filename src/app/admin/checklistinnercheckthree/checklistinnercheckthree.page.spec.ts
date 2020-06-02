import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChecklistinnercheckthreePage } from './checklistinnercheckthree.page';

describe('ChecklistinnercheckthreePage', () => {
  let component: ChecklistinnercheckthreePage;
  let fixture: ComponentFixture<ChecklistinnercheckthreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistinnercheckthreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChecklistinnercheckthreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
