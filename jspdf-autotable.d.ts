declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: jsPDFAutoTable.Options) => void;
  }
}

declare namespace jsPDFAutoTable {
  interface Options {
    head: string[][];
    body: string[][];
    theme?: 'striped' | 'grid' | 'plain';
    margin?: { top: number; bottom?: number; left?: number; right?: number };
    styles?: {
      fontSize?: number;
      cellPadding?: number;
      textColor?: [number, number, number];
    };
  }
}
