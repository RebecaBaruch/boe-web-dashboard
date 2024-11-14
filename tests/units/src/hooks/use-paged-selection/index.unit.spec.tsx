import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react';
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

// eslint-disable-next-line react/prop-types
const PagedSelectionWrapper = ({ data, itemsPerPage }) => {
  const hookValues = usePagedSelection({ data, itemsPerPage });

  return (
    <div>
      <button onClick={hookValues.handleNext}>Next</button>
      <button onClick={hookValues.handlePrev}>Previous</button>
      <button onClick={hookValues.handleSelectMode}>Toggle Select Mode</button>
      <button onClick={() => hookValues.toggleSelectRow('1')}>
        Toggle Row 1
      </button>
      <button onClick={hookValues.toggleSelectAll}>Toggle Select All</button>
      <div data-testid="current-page">{hookValues.currentPage}</div>
      <div data-testid="total-pages">{hookValues.totalPages}</div>
      <div data-testid="is-select-mode">
        {hookValues.isSelectMode.toString()}
      </div>
      <div data-testid="selected-rows-count">
        {hookValues.selectedRows.size}
      </div>
    </div>
  );
};

describe('usePagedSelection', () => {
  it('should initialize with correct values', () => {
    render(<PagedSelectionWrapper data={mockData} itemsPerPage={2} />);

    expect(screen.getByTestId('current-page').textContent).toBe('1');
    expect(screen.getByTestId('total-pages').textContent).toBe('3');
    expect(screen.getByTestId('is-select-mode').textContent).toBe('false');
    expect(screen.getByTestId('selected-rows-count').textContent).toBe('0');
  });

  it('should paginate correctly', () => {
    render(<PagedSelectionWrapper data={mockData} itemsPerPage={2} />);

    act(() => {
      screen.getByText('Next').click();
    });

    expect(screen.getByTestId('current-page').textContent).toBe('2');

    act(() => {
      screen.getByText('Previous').click();
    });

    expect(screen.getByTestId('current-page').textContent).toBe('1');
  });

  it('should toggle select mode', () => {
    render(<PagedSelectionWrapper data={mockData} itemsPerPage={2} />);

    act(() => {
      screen.getByText('Toggle Select Mode').click();
    });

    expect(screen.getByTestId('is-select-mode').textContent).toBe('true');

    act(() => {
      screen.getByText('Toggle Select Mode').click();
    });

    expect(screen.getByTestId('is-select-mode').textContent).toBe('false');
  });

  it('should toggle row selection correctly', () => {
    render(<PagedSelectionWrapper data={mockData} itemsPerPage={2} />);

    act(() => {
      screen.getByText('Toggle Row 1').click();
    });

    expect(screen.getByTestId('selected-rows-count').textContent).toBe('1');

    act(() => {
      screen.getByText('Toggle Row 1').click();
    });

    expect(screen.getByTestId('selected-rows-count').textContent).toBe('0');
  });

  it('should toggle select all rows correctly', () => {
    render(<PagedSelectionWrapper data={mockData} itemsPerPage={2} />);

    act(() => {
      screen.getByText('Toggle Select All').click();
    });

    expect(screen.getByTestId('selected-rows-count').textContent).toBe(
      mockData.length.toString(),
    );

    act(() => {
      screen.getByText('Toggle Select All').click();
    });

    expect(screen.getByTestId('selected-rows-count').textContent).toBe('0');
  });
});
