import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderComponent } from './render.component';

describe('RenderComponent', () => {
  let component: RenderComponent;
  let fixture: ComponentFixture<RenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
