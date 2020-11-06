import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Faq from '../Faq'

Enzyme.configure({ adapter: new Adapter() })

it('Faq renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Faq />, div)
})
