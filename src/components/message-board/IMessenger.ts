import type IMessage from "../message/IMessage";

export default interface IMessenger {
    IsVisible: boolean,
    Id: string,
    Name: string,
    Avatar: string,
    Messages: IMessage[]
}