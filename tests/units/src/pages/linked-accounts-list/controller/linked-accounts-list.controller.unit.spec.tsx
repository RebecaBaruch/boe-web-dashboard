import React from 'react';
import LinkedAccountsList from '../../../../../../src/pages/linked-accounts-list/index';
import { renderWithTheme } from '../../../../../../src/utils/render-with-theme';

const mockedRouter = {
  push: jest.fn(),
};

jest.mock('next/router', () => ({
  useRouter: () => mockedRouter,
}));

describe('LinkedAccountsList', () => {
  it('should render LinkedAccountsList', () => {
    const { container } = renderWithTheme(<LinkedAccountsList />);

    expect(container).toMatchSnapshot();
  });
});
