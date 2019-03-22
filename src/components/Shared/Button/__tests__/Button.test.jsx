import React from 'react';
import { shallow } from 'enzyme';
import Button from '..';

describe('components/Button', () => {
  const testProps = {
    onClick: () => {},
  };

  describe('props', () => {
    describe('.onClick', () => {
      it('is being executed when user clicks on the button', () => {
        jest.spyOn(testProps, 'onClick');

        const wrapper = shallow(<Button {...testProps}>Click me</Button>);
        wrapper.simulate('click');

        expect(testProps.onClick).toHaveBeenCalled();
      });
    });
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<Button {...testProps}>Click me</Button>);
    expect(wrapper).toMatchSnapshot();
  });
});
