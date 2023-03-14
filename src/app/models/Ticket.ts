import {Comments} from "./Comment";
import {Author} from "./Author";
import {Tag} from "./Tag";

export class Ticket {
  id?: number
  title?: string
  content?: string
  author?: Author
  comments?: Comment[]
  tags?: Tag[]
}
