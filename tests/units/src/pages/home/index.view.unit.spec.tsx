import React from 'react';
import { screen, render } from '@testing-library/react';
import Home from '../../../../../src/pages/home/view/home.view';

describe('Home', () => {
    it('should render Home with text Home', () => {
        const { container } = render(<Home />);

        expect(screen.getByText('Home')).toBeInTheDocument();

        expect(container.firstChild).toMatchSnapshot();
    });
});
