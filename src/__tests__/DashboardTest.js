import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils'; 
import Data from '../components/Data';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow , configure} from 'enzyme';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Data />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  configure({adapter: new Adapter()});

describe('Register Component', () => {
    const wrapper = shallow(<Data />);

    it('should have a btn component', ()=> {
        expect(wrapper.find('Button')).toHaveLength(1);
    });

    it('renders react-modal', () => {
        const wrapper = shallow(<Data />);
        expect(wrapper.find('Modal')).toHaveLength(0);
    });

    it('should have an empty reward, category state var', ()=> {
        expect(wrapper.state('listName')).toEqual('');
        expect(wrapper.state('cardName')).toEqual('');
    });
})