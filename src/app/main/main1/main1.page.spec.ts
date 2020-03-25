import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Main1Page } from './main1.page';

describe('Main1Page', () => {
  let component: Main1Page;
  let fixture: ComponentFixture<Main1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Main1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Main1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
