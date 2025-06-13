import { Component } from '@angular/core';
import { ChatBoardComponent } from '../components/chat-board/chat-board.component';
@Component({
  selector: 'app-chat',
  imports: [ChatBoardComponent],
  templateUrl: './chat.component.html',
  standalone: true,
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

}
