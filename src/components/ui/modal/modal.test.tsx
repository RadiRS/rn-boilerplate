import React from 'react';
import { render } from '@testing-library/react-native';

import { Modal, View } from '@/components/ui';
import { waitTo } from '@/helpers';

describe('<Modal />', () => {
  it('should render component correctly', async () => {
    const rendered = render(
      <Modal isVisible>
        <View />
      </Modal>,
    ).toJSON();

    // wait for modal animated to display
    await waitTo(500);

    expect(rendered).toMatchSnapshot();
  });
});
