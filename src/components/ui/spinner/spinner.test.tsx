import React from 'react';

import { renderWithRedux } from '@/helpers';
import { Spinner } from '@/components/ui';

describe('<Spinner />', () => {
  it('should render component correctly', () => {
    const rendered = renderWithRedux(<Spinner />).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
