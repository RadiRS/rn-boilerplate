import React from 'react';

import { renderWithNavigation } from '@/helpers';
import { Webview } from '@/components/ui';

describe('<Webview />', () => {
  it('should render component correctly', () => {
    const rendered = renderWithNavigation(<Webview />).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
