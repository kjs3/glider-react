import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Glider from '../src/index'

Enzyme.configure({ adapter: new Adapter() })

describe('Glider', function() {
  it('should render', function() {
    const wrapper = shallow(
      <Glider />
    )

    expect(
      wrapper.contains(
        <div>I'll be a Glider when I grow up.</div>
      )
    ).toBe(true)
  })
})
