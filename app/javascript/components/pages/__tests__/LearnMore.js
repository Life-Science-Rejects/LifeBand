import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import LearnMore from '../LearnMore'

Enzyme.configure({ adapter: new Adapter() })

it('LearnMore renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LearnMore />, div)
})
