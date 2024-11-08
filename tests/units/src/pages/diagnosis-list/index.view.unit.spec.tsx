import React from 'react';
import { screen } from '@testing-library/react';
import DiagnosisList from '../../../../../src/pages/diagnosis-list/view/diagnosis-list.view';
import { renderWithTheme } from '../../../../../src/utils/render-with-theme';

describe('DiagnosisList', () => {
  it('should render DiagnosisList with text DiagnosisList', () => {
    const { container } = renderWithTheme(<DiagnosisList />);

    expect(screen.getByText('DiagnosisList - Generated page')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
