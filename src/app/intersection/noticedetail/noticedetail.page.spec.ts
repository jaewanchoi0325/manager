import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoticedetailPage } from './noticedetail.page';

describe('NoticedetailPage', () => {
  let component: NoticedetailPage;
  let fixture: ComponentFixture<NoticedetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticedetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoticedetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
