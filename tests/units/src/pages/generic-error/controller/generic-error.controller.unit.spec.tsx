import React from 'react';
import GenericError from '../../../../../../src/pages/error/generic-error/index.page';
import { renderWithTheme } from '../../../../../../src/utils/render-with-theme';

const mockedRouter = {
  push: jest.fn(),
};

jest.mock('next/router', () => ({
  useRouter: () => mockedRouter,
}));

describe('GenericError', () => {
  it('should render GenericError', () => {
    const { container } = renderWithTheme(<GenericError />);

    expect(container).toMatchSnapshot();
  });
});
