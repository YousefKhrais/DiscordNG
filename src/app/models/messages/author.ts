export interface Author {
  id: string
  username: string
  avatar: string
  discriminator: string
  public_flags: number
  flags: number
  banner: any
  accent_color: any
  global_name?: string
  avatar_decoration_data: any
  banner_color: any
  bot?: boolean
}