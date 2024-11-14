import React from 'react';
import downloadPDF from '../../../../../src/components/data-table/utils/handle-selected-download';
import { pdf } from '@react-pdf/renderer';
import { PDFDocumentGenerator } from '../../../../../src/utils/pdf-document-generator';
import { PDFDocumentProps } from '../../../../../src/utils/pdf-document-generator';

jest.mock('@react-pdf/renderer', () => ({
  pdf: jest.fn(),
}));

jest.mock('utils/pdf-document-generator', () => ({
  PDFDocumentGenerator: jest.fn(),
}));

describe('downloadPDF', () => {
  const mockBlob = new Blob(['PDF content'], { type: 'application/pdf' });

  const mockRecord: PDFDocumentProps = {
    record: {
      id: '1',
      animalId: '123',
      animalName: 'Dog',
      animalPhoto: 'dog.jpg',
      date: '2024-10-10',
      result: 'Positive',
      risk: 5,
      status: 'Active',
      analysisImg: 'analysis.jpg',
      riskLabel: 'High',
      authorName: 'Dr. Smith',
      authorPhoto: 'author.jpg',
    },
  };

  beforeEach(() => {
    (pdf as jest.Mock).mockReturnValue({
      toBlob: jest.fn().mockResolvedValue(mockBlob),
    });
    (PDFDocumentGenerator as jest.Mock).mockReturnValue(<div>PDF</div>);

    const mockCreateObjectURL = jest
      .fn()
      .mockReturnValue('blob:http://localhost');
    global.URL.createObjectURL = mockCreateObjectURL;

    const createElementSpy = jest.spyOn(document, 'createElement');
    createElementSpy.mockImplementation((tagName: string) => {
      if (tagName === 'a') {
        return {
          href: '',
          download: '',
          click: jest.fn(),
        } as unknown as HTMLAnchorElement;
      }
      return document.createElement(tagName);
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  it('should generate a PDF and download it with the correct filename', async () => {
    const linkClickSpy = jest.fn();
    const mockLink = document.createElement('a');
    mockLink.click = linkClickSpy;

    await downloadPDF(mockRecord, 'test-report.pdf');

    console.log('Download link filename:', mockLink.download);

    expect(PDFDocumentGenerator).toHaveBeenCalledWith(mockRecord);

    expect(pdf).toHaveBeenCalled();
    expect((pdf as jest.Mock).mock.results[0].value.toBlob).toHaveBeenCalled();

    expect(document.createElement).toHaveBeenCalledWith('a');

    expect(global.URL.createObjectURL).toHaveBeenCalledWith(mockBlob);
  });

  it('should use the default filename if none is provided', async () => {
    const linkClickSpy = jest.fn();

    const createElementSpy = jest.spyOn(document, 'createElement');
    const mockLink = {
      href: '',
      download: '',
      click: linkClickSpy,
    };

    createElementSpy.mockReturnValue(mockLink as unknown as HTMLAnchorElement);

    await downloadPDF(mockRecord);

    expect(mockLink.download).toBe('diagnosis_report.pdf');
  });
});
