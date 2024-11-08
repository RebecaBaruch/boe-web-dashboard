import React from 'react';
import DiagnosisList from '../../../../../../src/pages/diagnosis-list/index';
import { renderWithTheme } from '../../../../../../src/utils/render-with-theme';
import { screen } from '@testing-library/react';

const mockedRouter = {
  push: jest.fn(),
};

jest.mock('next/router', () => ({
  useRouter: () => mockedRouter,
}));

describe('DiagnosisList', () => {
  it('should render DiagnosisList', () => {
    renderWithTheme(<DiagnosisList />);

    expect(screen.getByText('Ação')).toBeInTheDocument();
  });
});
