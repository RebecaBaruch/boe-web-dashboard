import React from 'react';
import { screen } from '@testing-library/react';
import FarmProfile from '../../../../../src/pages/user-profile/components/farm-profile/view/farm-profile.view';
import { renderWithTheme } from '../../../../../src/utils/render-with-theme';

describe('FarmProfile', () => {
    it('should render FarmProfile with text FarmProfile', () => {
        const { container } = renderWithTheme(<FarmProfile />);

        expect(screen.getByText('FarmProfile - Generated page')).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
