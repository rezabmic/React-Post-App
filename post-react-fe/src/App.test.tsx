import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { postServiceMock } from './test/postServiceMock';

test('App renders successfully - smoke test', () => {
  render(<App postService={postServiceMock} />);
});