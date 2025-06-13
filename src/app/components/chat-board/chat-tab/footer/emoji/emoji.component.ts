import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
    selector: 'app-emoji',
    templateUrl: './emoji.component.html',
    styleUrls: ['./emoji.component.scss'],
})
export class EmojiComponent {
  emojis!: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('assets/json/emoji.json').subscribe(data => {
      this.emojis = data;
    });
  }
}
