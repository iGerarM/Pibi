import { Component, ElementRef, ViewChild } from '@angular/core';
import { SnippetModalComponent } from './snippet-modal/snippet-modal.component';
import { PollModalComponent } from './poll-modal/poll-modal.component';

@Component({
    selector: 'app-quick-poll',
    templateUrl: './quick-poll.component.html',
    styleUrls: ['./quick-poll.component.scss'],
    imports: [SnippetModalComponent, PollModalComponent]
})
export class QuickPollComponent {
  
  public displayBlock: boolean = false;

  @ViewChild("codeModal")codeModal!: SnippetModalComponent;
  @ViewChild("pollModal")pollModal!: PollModalComponent;

  constructor(private elementRef: ElementRef) { }

  toggleDisplay() {
    this.displayBlock = !this.displayBlock;
    const element = this.elementRef.nativeElement.querySelector('.contact-poll-content');
    element.style.display = this.displayBlock ? 'block' : 'none';
  }
}
