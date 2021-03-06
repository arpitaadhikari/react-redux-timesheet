import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EmployeeRow extends Component {
  // TODO - actually implement this for realz
  render() {

    const employee = this.props.employee;
    return (
      <tr>
        <td>{employee.username}</td>
        <td>{employee.email} </td>
        <td>{employee.firstname}</td>
        <td>{employee.lastname}</td>
        <td>{employee.admin ? 'Yes' : 'No'}</td>
      </tr>
    );
  }
}

EmployeeRow.propTypes = {
  employee: PropTypes.object.isRequired
};

export default EmployeeRow;
