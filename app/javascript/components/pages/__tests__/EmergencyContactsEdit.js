import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import EmergencyContactsEdit from '../EmergencyContactsEdit'

Enzyme.configure({ adapter: new Adapter() })

it('EmergencyContactsEdit renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<EmergencyContactsEdit />, div)
})
