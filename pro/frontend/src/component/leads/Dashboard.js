import React, { Component, Fragment } from 'react'
import Leads from './Leads';
import Form from './Form';
 


export class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <Form />
        <Leads />
      </Fragment>
    )
  }
}

export default Dashboard