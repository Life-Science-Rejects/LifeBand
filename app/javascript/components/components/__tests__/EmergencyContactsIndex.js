import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import EmergencyContactsIndex from '../EmergencyContactsIndex'

Enzyme.configure({ adapter: new Adapter() })

it('EmergencyContactsIndex renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<EmergencyContactsIndex />, div)
})
