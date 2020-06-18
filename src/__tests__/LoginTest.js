import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils'; 
import Login from '../auth/Login';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow , configure} from 'enzyme';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Login />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

configure({adapter: new Adapter()});

describe('Login Component', () => {
 
    it('has an h3 tag', () => {
        const component = ReactTestUtils.renderIntoDocument(<Login/>);    
        var h3 = ReactTestUtils.findRenderedDOMComponentWithTag(
         component, 'h3'
       );
    });
   
    it('is wrapped inside a container class', () => {
        const component = ReactTestUtils.renderIntoDocument(<Login/>);    
        var node = ReactTestUtils.findRenderedDOMComponentWithClass(
         component, 'container'
       );
    });
    const wrapper = shallow(<Login />);

    it('should have a btn component', ()=> {
         //There should be only one button
        expect(wrapper.find('Button')).toHaveLength(1);
    });

    it('should have an empty email and password state var', ()=> {
        //Optionally test to check if password and email are empty strings on setup
        expect(wrapper.state('email')).toEqual('');
        expect(wrapper.state('password')).toEqual('');
    });

})

