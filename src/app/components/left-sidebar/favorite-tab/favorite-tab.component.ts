import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { AddFavoriteComponent } from './add-favorite/add-favorite.component';
import { ChatMainComponent } from './chat-main/chat-main.component';
import { FeatherIconsComponent } from '../../../shared/components/feather-icons/feather-icons.component';
import { SearchComponent } from '../search/search.component';

@Component({
    selector: 'app-favorite-tab',
    templateUrl: './favorite-tab.component.html',
    styleUrls: ['./favorite-tab.component.scss'],
    imports: [
        SearchComponent,
        FeatherIconsComponent,
        AddFavoriteComponent,
        ChatMainComponent,
    ]
})
export class FavoriteTabComponent {
  public isFavorite: boolean = false;
  public isActive: boolean = false;

  @ViewChild("addFavorite")addFavorite!: AddFavoriteComponent;
  @Output() buttonClicked = new EventEmitter<boolean>();

  handleClick() {
    this.isActive = true;
    this.buttonClicked.emit(true);
  }

  openModal(){
    this.addFavorite?.openModal()
  }
}
