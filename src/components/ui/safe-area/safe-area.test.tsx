import React from 'react';

import { renderWithRedux } from '@/helpers';
import { SafeArea } from '@/components/ui';

describe('<SafeArea />', () => {
  it('should render component correctly', () => {
    const rendered = renderWithRedux(<SafeArea />).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
