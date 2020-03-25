import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrashdetailPage } from './trashdetail.page';

describe('TrashdetailPage', () => {
  let component: TrashdetailPage;
  let fixture: ComponentFixture<TrashdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrashdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
