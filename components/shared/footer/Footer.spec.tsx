import * as React from 'react';
import {mount} from 'enzyme';
import Footer from './footer';

describe('Components', () => {
  describe('Header', () => {
    it('should render without throwing an error', function () {
      const wrap = mount(<Footer/>);

      expect(wrap.find('a').first().text()).toBe('Terms');
    })
  })  
})