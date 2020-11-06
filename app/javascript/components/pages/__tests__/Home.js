import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from '../Home'

Enzyme.configure({ adapter: new Adapter() })

it('Home renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Home />, div)
})
