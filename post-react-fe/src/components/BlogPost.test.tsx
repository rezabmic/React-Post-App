import React from 'react';
import { render } from '@testing-library/react';
import BlogPost from './BlogPost';

test('BlogPost renders successfully - smoke test', () => {
  render(<BlogPost title="test" />);
});
