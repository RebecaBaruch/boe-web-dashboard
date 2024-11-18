import React from 'react';
import { screen } from '@testing-library/react';
import ChangePassword from '../../../../../src/pages/user-profile/components/change-password/view/change-password.view';
import { renderWithTheme } from '../../../../../src/utils/render-with-theme';

describe('ChangePassword', () => {
    it('should render ChangePassword with text ChangePassword', () => {
        const { container } = renderWithTheme(<ChangePassword />);

        expect(screen.getByText('ChangePassword - Generated page')).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
