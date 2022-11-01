import React from 'react';

import { Input } from '@/components/ui';
import { renderWithRedux } from '@/helpers';

describe('<Input />', () => {
  it('should render component correctly', () => {
    const rendered = renderWithRedux(<Input />).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
