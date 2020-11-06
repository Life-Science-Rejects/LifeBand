import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from '../Header'

Enzyme.configure({ adapter: new Adapter() })

it('Header renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Header />, div)
})
