import {Author} from "./Author";
import {Tag} from "./Tag";
import {Comment} from "./Comment";


export class Ticket {
  id?: number
  title?: string
  content?: string
  author?: Author
  comments?: Comment[]
  tags?: Tag[]
}
