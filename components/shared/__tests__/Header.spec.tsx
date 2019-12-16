import * as React from 'react';
import {mount} from 'enzyme';
import Header from '../Header';

describe('Components', () => {
  describe('Header', () => {
    it('should render without throwing an error', function () {
      const wrap = mount(<Header/>);

      expect(wrap.find('a').first().text()).toBe('Soccer');
    })
  })  
})