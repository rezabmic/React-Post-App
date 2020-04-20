import React from 'react';
import { render } from '@testing-library/react';
import Paragraph from './Paragraph';

test('Paragraph renders successfully - smoke test', () => {
  render(<Paragraph>test</Paragraph>);
});
