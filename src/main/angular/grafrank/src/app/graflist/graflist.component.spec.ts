import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraflistComponent } from './graflist.component';

describe('GraflistComponent', () => {
  let component: GraflistComponent;
  let fixture: ComponentFixture<GraflistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraflistComponent]
    });
    fixture = TestBed.createComponent(GraflistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
