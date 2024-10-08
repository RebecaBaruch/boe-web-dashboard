import React from 'react';
import { render } from '@testing-library/react';
import Login from '../../../../../../src/pages/login/index.page';

const mockedRouter = {
    push: jest.fn(),
};

jest.mock('next/router', () => ({
    useRouter: () => mockedRouter,
}));

describe('Login', () => {
    it('should render Login', async () => {
        const { container } = await render(<Login />);

        expect(container.firstChild).toMatchSnapshot();
    });
});
