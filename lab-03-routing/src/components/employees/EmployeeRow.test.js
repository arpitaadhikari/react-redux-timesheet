import React from 'react';
import EmployeeRow from './EmployeeRow';
import { shallow } from 'enzyme';

describe('Employee Row Component: ', () => {
  it('implement me', () => {
    expect(true).toBe(true);
  });

  it('should instantiate the Employee Table', () => {
    const employee = {
      username: 'fflintstone',
      email: 'fred.flintstone@slatequarry.com',
      firstName: 'Fred',
      lastName: 'Flintstone',
      admin: true,
    };
  
    const component = shallow(<EmployeeRow employee={employee} />);
  
    expect(component).toContainReact(<td>fflintstone</td>);
    expect(component).toContainReact(<td>fflintstone</td>);
    expect(component).toContainReact(<td>Yes</td>);
  });

  describe('<EmployeeRow />', () => {
    let wrapper;

    beforeEach(() => {
      const employee = {
        username: 'Arpita',
        email: 'arpitaadhikari12@gmail.com',
        firstName:'Arpita',
        lastName:'Adhikari',
        admin: true
      };

      wrapper = shallow(<EmployeeRow employee={employee} />);
    });

    it('should render values into expected cells', () => {
      expect.(wrapper.find('td')).toHaveLength(5);
      expect(wrapper.find('td').at(0).text()).toEqual('Arpita');
    expect(wrapper.find('td').at(1).text()).toEqual('arpitaadhikari12@gmail.com');
    expect(wrapper.find('td').at(2).text()).toEqual('Arpita');
    expect(wrapper.find('td').at(3).text()).toEqual('Adhikari');
    expect(wrapper.find('td').at(4).text()).toEqual('Yes');
    });

  });


});
