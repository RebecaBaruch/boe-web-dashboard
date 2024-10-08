import React from 'react';
import { screen, render } from '@testing-library/react';
import Login from '../../../../../src/pages/login/view/login.view';

describe('Login', () => {
    it('should render Login with text Login', () => {
        const { container } = render(<Login />);

        expect(screen.getByText('Login')).toBeInTheDocument();

        expect(container.firstChild).toMatchSnapshot();
    });
});
