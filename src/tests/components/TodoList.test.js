import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../../components/TodoList';

test('should test TodoList component.', () => {
 const wrapper = shallow(<TodoList />);
 expect(wrapper).toMatchSnapshot();
});

test('should call handleAddTodo method', () => {
    const wrapper = shallow(<TodoList />);
    const instance = wrapper.instance();
    const value = 'Publish Article';
    instance.handleAddTodo({
     preventDefault: () => {},
     target: {
      todo: {
        value
       }
      }
    });
   });