import { Directive, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EditableTableCell } from '../table-cell.class';

/** Column cell container. */
// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: 'fdp-table-cell' })
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class FdpTableCell {}

/**
 * Cell definition for a platform table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
@Directive({ selector: '[fdpCellDef]' })
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class FdpCellDef {
    constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({ selector: '[fdpEditableCellDef]' })
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class FdpEditableCellDef {
    constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({
    selector: '[fdpEditableCellForm]',
    providers: [{ provide: EditableTableCell, useExisting: FdpEditableCellFormDirective }]
})
export class FdpEditableCellFormDirective implements EditableTableCell {
    constructor(public form: NgForm) {}
}
