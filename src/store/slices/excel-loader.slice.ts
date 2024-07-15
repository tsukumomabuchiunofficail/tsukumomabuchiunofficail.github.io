/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable no-extend-native */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { readExcelFromUrl } from '../../shared/helpers/utilties';
import ExcelConfig from '../../assets/excel.config';
import type IMessenger from '../../components/message-board/IMessenger';
import type IKeyValuePair from '../../@types/IKeyValuePair';

interface ExcelLoaderState {
  loading: boolean;
  payload: IMessenger[];
}

const initialState: ExcelLoaderState = {
  loading: true,
  payload: [],
};


export const getExcelData = createAsyncThunk(
  'excel/get',
  async () => {
    const res = await readExcelFromUrl(ExcelConfig.path);
    if(res) {
      const keys:[] = res[0] as [];
      const imessengers = [];
      for(let i=1; i<res.length; i++) {
        const data:IKeyValuePair = res[i] as IKeyValuePair;
        const Id = data[keys.indexOf(ExcelConfig.key)];
        let msgr:IMessenger = imessengers.where(m => m[ExcelConfig.headers[ExcelConfig.key]] === Id).firstOrDefault();
        if(!msgr) {
          msgr = { Id,  Messages: []}
          imessengers.push(msgr);
        }

        let _msg = msgr.Messages.where(_m => _m.Timestamp === data[keys.indexOf(ExcelConfig.timestamp)]).firstOrDefault();
        if(!_msg) {
          _msg = {};
          msgr.Messages.push(_msg);
        }
        for(const j in keys) {
          const currentProp = ExcelConfig.headers[keys[j]];
          _msg[currentProp] = data[j];
        }
        msgr.Avatar = _msg?.Avatar;
        msgr.Name = _msg?.Name;
      }

      return {
        loading:false,
        payload: imessengers
      }
    }

    return {
      loading: true,
      payload: [],
    }
  },
);
export const excelLoaderSlice = createSlice({
  name: 'main/excelLoader',
  initialState,
  reducers: {
    update: (
      state: {},
      action: PayloadAction<[]>,
    ) => {
      return { ...state, ...action.payload };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getExcelData.pending, () => {
        excelLoaderActions.update({ loading: true });
      })
      .addCase(getExcelData.rejected, () => {
        excelLoaderActions.update({ loading: false });
      })
      .addCase(getExcelData.fulfilled, (state, { payload }) => {
        return { ...state, ...payload };
      });
  },
});

export const excelLoaderActions = excelLoaderSlice.actions;

export default excelLoaderSlice.reducer;
