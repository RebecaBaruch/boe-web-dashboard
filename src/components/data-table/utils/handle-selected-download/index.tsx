import { pdf } from '@react-pdf/renderer';
import {
  PDFDocumentGenerator,
  PDFDocumentProps,
} from '../../../../../src/utils/pdf-document-generator';

const downloadPDF = async (
  record: PDFDocumentProps,
  fileName: string = 'diagnosis_report.pdf',
) => {
  const pdfDocument = PDFDocumentGenerator(record) as React.ReactElement;

  const blob = await pdf(pdfDocument).toBlob();

  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
};

export default downloadPDF;
