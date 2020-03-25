import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpiniondetailPage } from './opiniondetail.page';

describe('OpiniondetailPage', () => {
  let component: OpiniondetailPage;
  let fixture: ComponentFixture<OpiniondetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpiniondetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpiniondetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
