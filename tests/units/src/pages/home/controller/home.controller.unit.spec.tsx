import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../../../../../src/pages/home/index';

const mockedRouter = {
  push: jest.fn(),
};

jest.mock('next/router', () => ({
  useRouter: () => mockedRouter,
}));

describe('Home', () => {
  it('should render Home', async () => {
    const { container } = await render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
