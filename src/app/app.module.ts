import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersListComponent } from './components/home/servers-list/servers-list.component';
import { TopbarNavigationComponent } from './components/topbar-navigation/topbar-navigation.component';
import { DirectMessagesListComponent } from './components/direct-messages-list/direct-messages-list.component';
import { UserControlPanelComponent } from './components/user-control-panel/user-control-panel.component';
import { NowPlayingColumnComponent } from './components/home/now-playing-column/now-playing-column.component';
import { PeopleColumnComponent } from './components/home/people-column/people-column.component';
import { PeopleListComponent } from './components/home/people-list/people-list.component';
import { PeopleListItemComponent } from './components/home/people-list-item/people-list-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { UserSettingsSidebarComponent } from './components/settings/user-settings/user-settings-sidebar/user-settings-sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { VoiceChannelItemCardComponent } from './components/shared/activities/voice-channel-item-card/voice-channel-item-card.component';
import { CreateServerModalComponent } from './components/shared/modals/create-server-modal/create-server-modal.component';
import { UserSettingsComponent } from './components/settings/user-settings/user-settings.component';
import { MyAccountComponent } from './components/settings/user-settings/my-account/my-account.component';
import { HDividerComponent } from './components/shared/h-divider/h-divider.component';
import { DirectMessageComponent } from './components/direct-message/direct-message.component';
import { DirectMessageTopbarComponent } from './components/direct-message/direct-message-topbar/direct-message-topbar.component';
import { ProfilePanelComponent } from './components/direct-message/profile-panel/profile-panel.component';
import { ChatContentComponent } from './components/direct-message/chat-content/chat-content.component';
import { ChatBeginningBannerComponent } from './components/direct-message/chat-beginning-banner/chat-beginning-banner.component';
import { ChatMessageComponent } from './components/direct-message/chat-message/chat-message.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { ParsedMessageComponent } from './components/direct-message/parsed-message/parsed-message.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersListComponent,
    TopbarNavigationComponent,
    DirectMessagesListComponent,
    UserControlPanelComponent,
    NowPlayingColumnComponent,
    PeopleColumnComponent,
    PeopleListComponent,
    PeopleListItemComponent,
    VoiceChannelItemCardComponent,
    CreateServerModalComponent,
    UserSettingsSidebarComponent,
    HomeComponent,
    UserSettingsComponent,
    MyAccountComponent,
    HDividerComponent,
    DirectMessageComponent,
    DirectMessageTopbarComponent,
    ProfilePanelComponent,
    ChatContentComponent,
    ChatBeginningBannerComponent,
    ChatMessageComponent,
    ReversePipe,
    ParsedMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
