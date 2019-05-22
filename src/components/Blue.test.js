import React from 'react';
import { shallow } from 'enzyme';
import Blue from './Blue';


describe('Blue component test', ()=>{
  it('renders stuff', ()=>{
    const wrapper = shallow(<Blue/>);
    expect(wrapper).toMatchSnapshot();
  });
})
;
