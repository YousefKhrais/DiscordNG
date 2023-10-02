import { Attachment } from "./attachment"
import { Author } from "./author"
import { Embed } from "./embed"
import { Mention } from "./mention"

export interface Message {
  id: string
  type: number
  content: string
  channel_id: string
  author: Author
  attachments: Attachment[]
  embeds: any[]
  mentions: Mention[]
  mention_roles: any[]
  pinned: boolean
  mention_everyone: boolean
  tts: boolean
  timestamp: string
  edited_timestamp: any
  flags: number
  components: any[]
}