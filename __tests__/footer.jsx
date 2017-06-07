import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Footer from '../src/components/Footer.jsx';

describe('Footer', () => {
  const wrapper = mount(<Footer />);
  it('should have a footer', () => {
    expect(wrapper.find('div')).to.have.length(1);
  });
});