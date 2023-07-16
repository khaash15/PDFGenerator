import './App.css';
import PDFContent from './PDFContent/PDFContent';
import { PDFDownloadLink, Document, Page,ReactPDF} from '@react-pdf/renderer';
 
function App() {
//   function Download(){
 
    
//  }
  return (
    
    <div>
  <PDFDownloadLink document={<PDFContent />} fileName="download.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : <button>Download</button>)}
    </PDFDownloadLink>

  </div>
  );
}

export default App;
