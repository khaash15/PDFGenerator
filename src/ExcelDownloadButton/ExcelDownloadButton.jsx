import React from 'react';

import { saveAs } from 'file-saver';
import Button from '@material-ui/core/Button';
import * as XLSX from 'xlsx';


const ExcelDownloadButton = () => {
  const generateExcelFile = () => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet([
      ['Name', 'Email'],
      ['John Doe', 'john.doe@example.com'],
      ['Jane Smith', 'jane.smith@example.com'],
    ]);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet 1');
    const excelBuffer = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });
    const excelBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(excelBlob, 'my-file.xlsx');
  };

  return (
    <Button variant="contained" color="primary" onClick={generateExcelFile}>
      Download Excel
    </Button>
  );
};

export default ExcelDownloadButton;
