import { renderHook, act } from '@testing-library/react-hooks';
import usePagedSelection from '../../../../../src/hooks/use-paged-selection';
import {
  TableAnimalsData,
  TableDiagnosisData,
} from '../../../../../src/components/data-table/types';

const mockData: (TableAnimalsData | TableDiagnosisData)[] = [
  {
    id: '1',
    animalId: '123',
    riskLabel: 'Low',
    authorName: 'Author 1',
    authorPhoto: 'photo1.jpg',
    animalPhoto: 'animal1.jpg',
    diagnosisDate: '2021-01-01',
    date: '2021-01-01',
    result: 'Negative',
    risk: 10,
  },
  {
    id: '2',
    animalId: '124',
    riskLabel: 'Medium',
    authorName: 'Author 2',
    authorPhoto: 'photo2.jpg',
    animalPhoto: 'animal2.jpg',
    diagnosisDate: '2021-01-02',
    date: '2021-01-02',
    result: 'Positive',
    risk: 50,
  },
  {
    id: '3',
    animalId: '125',
    riskLabel: 'High',
    authorName: 'Author 3',
    authorPhoto: 'photo3.jpg',
    animalPhoto: 'animal3.jpg',
    diagnosisDate: '2021-01-03',
    date: '2021-01-03',
    result: 'Positive',
    risk: 90,
  },
  {
    id: '4',
    animalId: '126',
    riskLabel: 'Low',
    authorName: 'Author 4',
    authorPhoto: 'photo4.jpg',
    animalPhoto: 'animal4.jpg',
    diagnosisDate: '2021-01-04',
    date: '2021-01-04',
    result: 'Negative',
    risk: 10,
  },
  {
    id: '5',
    animalId: '127',
    riskLabel: 'Medium',
    authorName: 'Author 5',
    authorPhoto: 'photo5.jpg',
    animalPhoto: 'animal5.jpg',
    diagnosisDate: '2021-01-05',
    date: '2021-01-05',
    result: 'Positive',
    risk: 50,
  },
  {
    id: '6',
    animalId: '128',
    riskLabel: 'High',
    authorName: 'Author 6',
    authorPhoto: 'photo6.jpg',
    animalPhoto: 'animal6.jpg',
    diagnosisDate: '2021-01-06',
    date: '2021-01-06',
    result: 'Positive',
    risk: 90,
  },
];

describe('usePagedSelection', () => {
  it('should initialize with correct values', () => {
    const { result } = renderHook(() =>
      usePagedSelection({ data: mockData, itemsPerPage: 2 }),
    );

    expect(result.current.currentPage).toBe(1);
    expect(result.current.totalPages).toBe(3);
    expect(result.current.currentItems).toEqual(mockData.slice(0, 2));
    expect(result.current.isSelectMode).toBe(false);
    expect(result.current.selectedRows.size).toBe(0);
  });

  it('should paginate correctly', () => {
    const { result } = renderHook(() =>
      usePagedSelection({ data: mockData, itemsPerPage: 2 }),
    );

    act(() => {
      result.current.handleNext();
    });

    expect(result.current.currentPage).toBe(2);
    expect(result.current.currentItems).toEqual(mockData.slice(2, 4));

    act(() => {
      result.current.handlePrev();
    });

    expect(result.current.currentPage).toBe(1);
    expect(result.current.currentItems).toEqual(mockData.slice(0, 2));
  });

  it('should toggle select mode', () => {
    const { result } = renderHook(() =>
      usePagedSelection({ data: mockData, itemsPerPage: 2 }),
    );

    act(() => {
      result.current.handleSelectMode();
    });

    expect(result.current.isSelectMode).toBe(true);

    act(() => {
      result.current.handleSelectMode();
    });

    expect(result.current.isSelectMode).toBe(false);
  });

  it('should toggle row selection correctly', () => {
    const { result } = renderHook(() =>
      usePagedSelection({ data: mockData, itemsPerPage: 2 }),
    );

    act(() => {
      result.current.toggleSelectRow('1');
    });

    expect(result.current.selectedRows.has('1')).toBe(true);
    expect(result.current.selectedRows.size).toBe(1);

    act(() => {
      result.current.toggleSelectRow('1');
    });

    expect(result.current.selectedRows.has('1')).toBe(false);
    expect(result.current.selectedRows.size).toBe(0);
  });

  it('should toggle select all rows correctly', () => {
    const { result } = renderHook(() =>
      usePagedSelection({ data: mockData, itemsPerPage: 2 }),
    );

    act(() => {
      result.current.toggleSelectAll();
    });

    expect(result.current.selectedRows.size).toBe(mockData.length);

    act(() => {
      result.current.toggleSelectAll();
    });

    expect(result.current.selectedRows.size).toBe(0);
  });
});
