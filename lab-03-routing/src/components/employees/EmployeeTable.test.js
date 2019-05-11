import React from 'react';
import EmployeeTable from './EmployeeTable';
import { mount } from 'enzyme';

describe('Employee Table Component: ', () => {
  it('implement me', () => {
    expect(true).toBe(true);
  });

  it('should instantiate the Employee Table', () => {
    const employees = [
      {
        username: 'fflintstone',
        email: 'fred.flintstone@slatequarry.com',
        firstName: 'Fred',
        lastName: 'Flintstone',
        admin: true,
        _id: 1,
      },
    ];
  
    const component = mount(<EmployeeTable employees={employees} />);
  
    expect(component).toContainReact(<th>Last Name</th>);
    expect(component).toIncludeText('fflintstone');
  
    expect(component.find('tbody tr')).toHaveLength(1);
  });
});

describe('<EmployeeTable />', () => {
  let wrapper;

  beforeEach(() => {
    const employees = [
      {
        username: 'fflintstone',
        email: 'fred.flintstone@slatequarry.com',
        firstName: 'Fred',
        lastName: 'Flintstone',
        admin: true,
        _id: 1
      }
    ];

    wrapper = shallow(<EmployeeTable employees={employees} />);
  });

  it('should render a row for each employee', () => {
    expect(wrapper.find(EmployeeRow)).toHaveLength(1);
  });
});