import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    imports: [FormsModule]
})
export class SearchComponent {

  public open: boolean = false;

  openSearch() {
    this.open = true;
  }

  closeSearch() {
    this.open = false;
  }
}
