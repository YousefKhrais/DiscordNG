import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/models/messages/message';

@Component({
  selector: 'app-parsed-message',
  templateUrl: './parsed-message.component.html',
  styleUrls: ['./parsed-message.component.scss']
})
export class ParsedMessageComponent implements OnInit {

  @Input() message!: string;

  parsedSpans: { text: string, type: string }[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log(this.message);

    this.parseMessage();
  }

  parseMessage(): void {
    const linkRegex = /https?:\/\/\S+/g;
    const hashtagRegex = /#\w+/g;
    const mentionRegex = /@\w+/g;

    let remainingMessage = this.message;
    let match;

    while ((match = linkRegex.exec(remainingMessage)) !== null) {
      this.parsedSpans.push({ text: match[0], type: 'link' });
    }

    while ((match = hashtagRegex.exec(remainingMessage)) !== null) {
      this.parsedSpans.push({ text: match[0], type: 'hashtag' });
    }

    while ((match = mentionRegex.exec(remainingMessage)) !== null) {
      this.parsedSpans.push({ text: match[0], type: 'mention' });
    }

    // Add the remaining text as plain text
    if (this.parsedSpans.length == 0) {
      this.parsedSpans.push({ text: remainingMessage, type: 'text' });
    }
  }

  getMessageStyle(type: string): string {
    switch (type) {
      case 'link':
        return 'text-[#00A8FC] cursor-pointer hover:underline';
      case 'hashtag':
        return 'text-green-500';
      case 'mention':
        return 'text-red-500';
      default:
        return '';
    }
  }

  onMessageClicked(item: any): void {
    if (item.type === 'link')
      window.open(item.text, '_blank');
  }
}

