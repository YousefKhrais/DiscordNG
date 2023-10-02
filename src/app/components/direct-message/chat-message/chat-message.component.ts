import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/models/messages/message';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {

  @Input() message!: Message;

  constructor() { }

  ngOnInit(): void { }

  getBorderColor(decimalColor: string): string {
    //Convert decimal color to hex
    var hexColor = Number(decimalColor).toString(16);
    return "!border-[#" + hexColor + "]";
  }
}
