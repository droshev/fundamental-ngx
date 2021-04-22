import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { NotificationModule } from '../notification.module';

@Component({
    template: `
        <fd-notification-body #notificationBodyRef [hasMessage]="hasMessage"></fd-notification-body>
    `
})
class TestComponent {
    @ViewChild('notificationBodyRef', { read: ElementRef })
    notificationBodyRef: ElementRef;

    hasMessage = false;
}

describe('NotificationBodyComponent', () => {
    let component: TestComponent;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent],
            imports: [NotificationModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should assign class', () => {
        expect(component.notificationBodyRef.nativeElement.className).toContain('fd-notification__body');
    });

    it('should assign additional classes', () => {
        component.hasMessage = true;
        fixture.detectChanges();
        expect(component.notificationBodyRef.nativeElement.classList).toContain('fd-notification__body--message');
    });
});
