import React, { Component } from 'react';
import * as XLSX from 'xlsx';
import axios from 'axios';

class ExcelReader extends Component<{ excelPath: string }> {
  constructor(props) {
    super(props);
    this.state = {
      excelData: null,
    };
    this.handleFileRead = this.handleFileRead.bind(this);
    this.handleFetchFromUrl = this.handleFetchFromUrl.bind(this);
  }

  handleFileRead(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      this.setState({ excelData: jsonData });
    };

    reader.readAsArrayBuffer(file);
  }

  async handleFetchFromUrl() {
    try {
      const url = this.props.excelPath;
      const response = await axios.get(url, { responseType: 'arraybuffer' });

      const data = new Uint8Array(response.data);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      this.setState({ excelData: jsonData });
    } catch (error) {
      console.error('Error fetching or parsing Excel file:', error);
    }
  }

  render() {
    return (
      <div>
        <input type="file" onChange={this.handleFileRead} />
        <button onClick={this.handleFetchFromUrl}>Fetch from URL</button>

        {this.state.excelData && (
          <div>
            <h3>Excel Data:</h3>
            <pre>{JSON.stringify(this.state.excelData, null, 2)}</pre>
          </div>
        )}
      </div>
    );
  }
}

export default ExcelReader;