import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordpoolComponent } from './wordpool.component';

describe('WordpoolComponent', () => {
  let component: WordpoolComponent;
  let fixture: ComponentFixture<WordpoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordpoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordpoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
