/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { getExcelData } from '../../store/slices/excel-loader.slice';
import type IMessenger from './IMessenger';
import Messeage from '../message';

class MesseageBoard extends Component<{dispatch: any, excelData:{excel:{loading:boolean, payload:IMessenger[]}}}> {
  messages: React.ReactElement[] = []; 
  async componentDidMount(): Promise<void> {
    await this.props.dispatch(getExcelData());
  }

  renderMessages() {
    this.messages = [];
    if(!this.props.excelData.excel.loading) {
      const excel = this.props.excelData.excel.payload;
      for(let i=0;i<excel.length;i++) {
        const data = excel[i];
        this.messages.push(<Messeage {...data} ></Messeage>)
      }
    }


    return this.messages
  }

  render() {
    return (
      <div className="hero w-full">
      <div className="text-center">
        <div className="">
          {this.props.excelData.excel.loading ? 
            <span className="loading loading-dots loading-lg"></span> :  <Fragment>{this.renderMessages()}</Fragment>}
        
        </div>
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { excelData: state };
};
export default connect(mapStateToProps)(MesseageBoard);
