import { Component } from '@angular/core';
import { NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionToggle, NgbAccordionButton, NgbCollapse, NgbAccordionCollapse, NgbAccordionBody } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-shared-document',
    templateUrl: './shared-document.component.html',
    styleUrls: ['./shared-document.component.scss'],
    imports: [NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionToggle, NgbAccordionButton, NgbCollapse, NgbAccordionCollapse, NgbAccordionBody]
})
export class SharedDocumentComponent {
}
