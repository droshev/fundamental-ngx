<<<<<<< HEAD
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { WizardStepComponent } from '../wizard-step/wizard-step.component';
=======
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
>>>>>>> master

@Component({
    selector: 'fd-wizard-step-indicator',
    templateUrl: './wizard-step-indicator.component.html',
<<<<<<< HEAD
    // TODO: remove these when implementing action sheet here
    styles: [
        `
            .fd-wizard-step-indicator-popover {
                vertical-align: middle;
            }

            .fd-wizard-step-indicator-list {
                max-width: 300px;
            }
        `
    ],
    encapsulation: ViewEncapsulation.None
=======
    changeDetection: ChangeDetectionStrategy.OnPush
>>>>>>> master
})
export class WizardStepIndicatorComponent {
    /**
     * The icon to use for this step.
     */
    @Input()
    glyph: string;
<<<<<<< HEAD

    /** @hidden */
    stackedItems: WizardStepComponent[];

    /**
     * Event emitted when this step indicator is clicked.
     */
    @Output()
    stepIndicatorItemClicked = new EventEmitter<WizardStepComponent>();

    /** @hidden */
    popoverStepIndicatorClicked(event: MouseEvent): void {
        if (this.stackedItems && this.stackedItems.length) {
            event.preventDefault();
        }
    }

    /** @hidden */
    stepItemClicked(step: WizardStepComponent, event: MouseEvent): void {
        event.preventDefault();
        this.stepIndicatorItemClicked.emit(step);
    }

=======
>>>>>>> master
}
