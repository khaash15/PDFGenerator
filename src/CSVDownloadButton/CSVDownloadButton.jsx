import React from 'react';
import { CSVLink } from 'react-csv';
import Button from '@material-ui/core/Button';

const CSVDownloadButton = () => {
  const csvData = [
    ['Name', 'Email'],
    ['John Doe', 'john.doe@example.com'],
    ['Jane Smith', 'jane.smith@example.com'],
  ];

  return (
    <CSVLink data={csvData} filename="my-file.csv">
      <Button variant="contained" color="primary">
        Download CSV
      </Button>
    </CSVLink>
  );
};

export default CSVDownloadButton;
