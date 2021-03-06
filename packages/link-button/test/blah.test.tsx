import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LinkButton } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LinkButton label="Hello" href="https://blog.riccardotrocca.net"/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
