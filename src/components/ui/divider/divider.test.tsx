import React from 'react';

import { Divider } from '@/components/ui';
import { renderWithRedux } from '@/helpers';

describe('<Divider />', () => {
  it('should render component correctly', () => {
    const rendered = renderWithRedux(<Divider />).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
