import './App.css';
import PDFContent from './PDFContent/PDFContent';
import { PDFDownloadLink, Document, Page,ReactPDF} from '@react-pdf/renderer';
import CSVDownloadButton from './CSVDownloadButton/CSVDownloadButton';
import ExcelDownloadButton from './ExcelDownloadButton/ExcelDownloadButton';
function App() {
//   function Download(){
 
    
//  }
  return (
    
    <div>
  <PDFDownloadLink document={<PDFContent />} fileName="download.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : <button >Download PDF</button>)}
    </PDFDownloadLink>
    <CSVDownloadButton></CSVDownloadButton>
    <ExcelDownloadButton></ExcelDownloadButton>
  </div>
  );
}

export default App;
