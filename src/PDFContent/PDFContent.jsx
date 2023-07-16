import React from "react"; 
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'; 
const PDFContent = () => {
 return(
  <Document>
    <Page size={"A4"}>
<View>
  <Text>
    Hello
  </Text>
</View>
    </Page>
  </Document>

 )
  };
  
  export default PDFContent