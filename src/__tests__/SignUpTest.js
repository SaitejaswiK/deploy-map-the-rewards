import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils'; 
import Login from '../auth/SignUp';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow , configure} from 'enzyme';
import SignUp from '../auth/SignUp';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SignUp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

configure({adapter: new Adapter()});

describe('Register Component', () => {
 
    it('has an h3 tag', () => {
        const component = ReactTestUtils.renderIntoDocument(<SignUp/>);    
        var h3 = ReactTestUtils.findRenderedDOMComponentWithTag(
         component, 'h3'
       );
    });
   
    it('is wrapped inside a container class', () => {
        const component = ReactTestUtils.renderIntoDocument(<SignUp/>);    
        var node = ReactTestUtils.findRenderedDOMComponentWithClass(
         component, 'container'
       );
    });
    const wrapper = shallow(<SignUp />);

    it('should have a btn component', ()=> {
        expect(wrapper.find('Button')).toHaveLength(1);
    });

    it('should have an empty name, email and password state var', ()=> {
        expect(wrapper.state('name')).toEqual('');
        expect(wrapper.state('email')).toEqual('');
        expect(wrapper.state('password')).toEqual('');
    });

})

