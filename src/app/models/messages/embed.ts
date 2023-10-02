import { Field } from "./field"
import { Footer } from "./footer"

export interface Embed {
  type: string
  title: string
  description: string
  color: number
  fields: Field[]
  footer: Footer
}