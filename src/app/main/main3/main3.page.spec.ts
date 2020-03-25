import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Main3Page } from './main3.page';

describe('Main3Page', () => {
  let component: Main3Page;
  let fixture: ComponentFixture<Main3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Main3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Main3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
