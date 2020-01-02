import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ShowCard } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ShowCard show={{ id: 123, name: 'Test Show', url: 'http://test.show.com', officialSite:'https://official.site', summary: 'About this show'}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
