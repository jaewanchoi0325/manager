import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChecklistinnerchecktwoPage } from './checklistinnerchecktwo.page';

describe('ChecklistinnerchecktwoPage', () => {
  let component: ChecklistinnerchecktwoPage;
  let fixture: ComponentFixture<ChecklistinnerchecktwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistinnerchecktwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChecklistinnerchecktwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
