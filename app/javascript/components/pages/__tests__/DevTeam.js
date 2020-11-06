import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DevTeam from '../DevTeam'

Enzyme.configure({ adapter: new Adapter() })

it('DevTeam renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DevTeam />, div)
})
