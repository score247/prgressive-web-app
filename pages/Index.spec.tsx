import * as React from 'react';
import {mount} from 'enzyme';
import Index from './Index';

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', function () {
      const wrap = mount(<Index userAgent="user agent test" />);

      expect(wrap.find('#index').text()).toBe('Index Page!');
    })
  })  
})