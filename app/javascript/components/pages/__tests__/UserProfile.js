import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import UserProfile from '../UserProfile'

Enzyme.configure({ adapter: new Adapter() })

it('UserProfile renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<UserProfile />, div)
})

it('UserProfile renders content', () => {
  const userProfile = shallow(<UserProfile />)
  expect(userProfile.find('p').text()).toEqual("User's profile.")
})

export default UserProfile;
