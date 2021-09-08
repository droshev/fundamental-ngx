import { Attribute, Directive } from '@angular/core';

import { CalendarI18nLabels } from './i18n/calendar-i18n-labels';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[fd-calendar-close-button]',
    host: {
        'class': 'fd-calendar__close-button',
        '[attr.aria-label]': '_ariaLabel'
    }
})
export class CalendarCloseButtonDirective {
    /** @hidden */
    get _ariaLabel(): string {
        return this._originalAriaLabel || this._calendarI18nLabels.closeCalendarLabel;
    }

    /** @hidden */
    constructor(
        @Attribute('aria-label') private _originalAriaLabel: string,
        private _calendarI18nLabels: CalendarI18nLabels
    ) {}
}
