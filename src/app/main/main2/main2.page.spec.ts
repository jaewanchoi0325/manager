import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Main2Page } from './main2.page';

describe('Main2Page', () => {
  let component: Main2Page;
  let fixture: ComponentFixture<Main2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Main2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Main2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
