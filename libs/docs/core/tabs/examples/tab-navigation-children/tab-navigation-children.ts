import { Component } from '@angular/core';

@Component({
    selector: 'fd-tab-navigation-example-child-first',
    template: `<p>Tab Content 1</p>`,
    standalone: true
})
export class TabNavigationExampleChildFirstComponent {}

@Component({
    selector: 'fd-tab-navigation-example-child-second',
    template: `<p>Tab Content 2</p>`,
    standalone: true
})
export class TabNavigationExampleChildSecondComponent {}

@Component({
    selector: 'fd-tab-navigation-example-child-third',
    template: `<p>Tab Content 3</p>`,
    standalone: true
})
export class TabNavigationExampleChildThirdComponent {}
