import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicAttributeComponent } from './graphic-attribute.component';

describe('GraphicAttributeComponent', () => {
  let component: GraphicAttributeComponent;
  let fixture: ComponentFixture<GraphicAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicAttributeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
