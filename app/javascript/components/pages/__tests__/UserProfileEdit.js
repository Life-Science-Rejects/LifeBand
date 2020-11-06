import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import UserProfileEdit from '../UserProfileEdit'

Enzyme.configure({ adapter: new Adapter() })

it('UserProfileEdit renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<UserProfileEdit />, div)
})
