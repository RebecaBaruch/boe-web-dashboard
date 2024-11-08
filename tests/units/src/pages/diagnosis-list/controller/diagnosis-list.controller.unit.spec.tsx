import React from 'react';
import DiagnosisList from '../../../../../../src/pages/diagnosis-list/index';
import { renderWithTheme } from '../../../../../../src/utils/render-with-theme';

const mockedRouter = {
  push: jest.fn(),
};

jest.mock('next/router', () => ({
  useRouter: () => mockedRouter,
}));

describe('DiagnosisList', () => {
  it('should render DiagnosisList', () => {
    const { container } = renderWithTheme(<DiagnosisList />);

    expect(container).toMatchSnapshot();
  });
});
