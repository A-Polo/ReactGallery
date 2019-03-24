import React from 'react';
import { shallow } from 'enzyme';
import Thumbnail from '../Thumbnail';

describe('components/Button', () => {
  const testProps = {
    onClick: () => {},
    onKeyPress: () => {},
  };

  describe('props', () => {
    describe('.onClick', () => {
      it('is being executed when user clicks on the Thumbnail', () => {
        jest.spyOn(testProps, 'onClick');

        const wrapper = shallow(<Thumbnail {...testProps}><h2>Title</h2><img src="http://test.src" alt="testAlt" /></Thumbnail>);
        wrapper.simulate('click');

        expect(testProps.onClick).toHaveBeenCalled();
      });
    });

    describe('.onKeyPress', () => {
      it('should be executed when user press any key', () => {
        jest.spyOn(testProps, 'onKeyPress');

        const wrapper = shallow(<Thumbnail {...testProps}><h2>Title</h2><img src="http://test.src" alt="testAlt" /></Thumbnail>);
        wrapper.simulate('keypress');

        expect(testProps.onKeyPress).toHaveBeenCalled();
      });
    });
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<Thumbnail {...testProps}><h2>Title</h2><img src="http://test.src" alt="testAlt" /></Thumbnail>);
    expect(wrapper).toMatchSnapshot();
  });
});
