import React from 'react';

import { renderWithRedux } from '@/helpers';
import { ScrollView } from '@/components/ui';

describe('<ScrollView />', () => {
  it('should render component correctly', () => {
    const rendered = renderWithRedux(<ScrollView />).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
