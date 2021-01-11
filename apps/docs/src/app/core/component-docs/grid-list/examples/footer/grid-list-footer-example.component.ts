import { ChangeDetectionStrategy, Component } from '@angular/core';

interface GridListItem {
    title: string;
    description: string;
}

@Component({
    selector: 'fd-grid-list-footer-example',
    templateUrl: './grid-list-footer-example.component.html',
    styleUrls: ['./grid-list-footer-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridListFooterExampleComponent {
    list: GridListItem[] = Array(5).fill({
        title: 'Title',
        description: 'Description'
    });
}
