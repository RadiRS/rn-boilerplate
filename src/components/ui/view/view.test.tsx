import React from 'react';
import { render } from '@testing-library/react-native';

import { View } from '@/components/ui';

describe('<View />', () => {
  it('should render component correctly', () => {
    const rendered = render(<View />).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
