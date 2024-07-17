import { Component } from 'react';
import type IMessenger from '../message-board/IMessenger';
import { ImAttachment } from "react-icons/im";
import type IMessage from './IMessage';
import {format} from 'date-fns'

class Message extends Component<IMessenger> {

  renderContext() {
    const msgs = []
    for(let i=0; i<this.props.Messages.length;i++) {
      const msg : IMessage = this.props.Messages[i];
      const lines = msg.Context.split('\n').map((line, index) => (
        <span key={index}>{line}<br /></span>
      ));
      msgs.push(
      <div className="p-4 bg-gray-100 rounded-lg shadow" key={msg.Timestamp}>
        <p className='p-4 bg-gray-100 rounded-lg flex flex-col space-y-4 text-left'>{lines}</p>
        <span className="block text-right text-sm text-gray-500 mt-2">{this.formatTimestamp(msg.Timestamp)}</span>
      {
        msg.Attachment ?               
        <div role="alert" className="alert shadow-lg">
        <ImAttachment />
        <div>
          <div className="text-xs">這則留言有一份附件</div>
        </div>
        <a href={msg.Attachment} target="_blank" className="btn btn-wide" rel="noreferrer">Download</a>
      </div> : <></>
        
      }
      
      </div>
      )
    }

    return msgs;
  }

  convertSerialDate(serial: string) {
    const days = Math.floor(Number(serial));
    const seconds = Math.round((Number(serial) - days) * 86400); // 86400 seconds in a day
    const date = new Date(1899, 11, 30); // December 30, 1899
    date.setDate(date.getDate() + days);
    date.setSeconds(date.getSeconds() + seconds);

    return date;
  }

  formatTimestamp(serial: string) {
    const date = this.convertSerialDate(serial);

    return format(date, 'yyyy-MM-dd HH:mm:ss');
  }


  render() {
    return (
        <div className="w-full max-w-2xl mx-auto">
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-4">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl font-medium flex items-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
            <img src="/img/avatar.png" />
            </div>
          </div>
          <div className="collapse-title text-xl font-medium">{this.props.Name}</div>
          </div>
          <div className="collapse-content space-y-4 p-4 break-words overflow-hidden">
            {this.renderContext()}
          </div>
        </div>
      </div>
    );
  }
};

export default Message;

