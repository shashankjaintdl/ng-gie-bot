import { Conversation } from "./Conversation";
import { UserFeedback } from "./UserFeedback";

export class EventData{
    public id:string;
    public timestamp:string;
    public conversation:Conversation;
    public UserFeedback:UserFeedback;
    public chitChat:Conversation;
    public noAnswer:Conversation;
}