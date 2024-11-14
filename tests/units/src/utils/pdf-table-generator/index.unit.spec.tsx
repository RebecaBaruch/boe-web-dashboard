import { generateTablePDF } from '../../../../../src/utils/pdf-table-generator';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

jest.mock('jspdf');
jest.mock('jspdf-autotable');

const mockSave = jest.fn();
(jsPDF as unknown as jest.Mock).mockImplementation(() => ({ save: mockSave }));

describe('generateTablePDF', () => {
  const columns = [
    { header: 'ID', field: 'animalId' },
    { header: 'Risk', field: 'risk' },
    { header: 'Result', field: 'result' },
  ];

  const data = [
    {
      riskLabel: 'Moderado',
      animalId: '123',
      result: 'Dermatite',
      risk: 50,
      authorName: 'John Doe',
      date: '2023-08-01',
    },
    {
      riskLabel: 'Alto',
      animalId: '456',
      result: 'Dermatofitose',
      risk: 80,
      authorName: 'Jane Smith',
      date: '2023-08-02',
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should generate and save PDF with the correct filename', () => {
    generateTablePDF(columns, data, 'test-file.pdf');

    expect(jsPDF).toHaveBeenCalled();
    expect(autoTable).toHaveBeenCalledWith(expect.any(Object), {
      head: [[['Risco'], ['Risk'], ['Result']]],
      body: [
        ['Moderado', '123', 'Dermatite', '50%', 'John Doe', '2023-08-01'],
        ['Alto', '456', 'Dermatofitose', '80%', 'Jane Smith', '2023-08-02'],
      ],
    });
    expect(mockSave).toHaveBeenCalledWith('test-file.pdf');
  });

  it('should generate and save PDF with the default filename when no filename is provided', () => {
    generateTablePDF(columns, data);

    expect(mockSave).toHaveBeenCalledWith('table-example.pdf');
  });

  it('should log an error and not generate PDF when data is empty', () => {
    console.error = jest.fn();

    generateTablePDF(columns, []);

    expect(console.error).toHaveBeenCalledWith('Nenhum dado para gerar o PDF.');
    expect(autoTable).not.toHaveBeenCalled();
    expect(mockSave).not.toHaveBeenCalled();
  });
});
