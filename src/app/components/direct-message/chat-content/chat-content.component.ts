import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Message } from 'src/app/models/messages/message';

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.scss']
})
export class ChatContentComponent implements OnInit {

  @ViewChild('chat') private chatContainer!: ElementRef;

  messages: Message[] = [];

  constructor(private changeDeterctorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.readMessagesFromJson();
  }

  scrollToBottom(): void {
    this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
  }

  readMessagesFromJson() {
    fetch('assets/json/messages.json')
      .then(response => response.json())
      .then(json => {
        this.messages = json;
        console.log(this.messages);
        this.changeDeterctorRef.detectChanges();
        this.scrollToBottom();
      });
  }
}
