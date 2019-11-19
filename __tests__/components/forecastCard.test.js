import React from 'react';
import { shallow } from 'enzyme';
import ForecastCard from '../../src/components/forecastCard';


it('renders temp', () => {
    const wrapper = shallow((
      <ForecastCard
        date="mockDate"
        temperature="mockTemperature"
        description="mockDescription"
        icon="mockIcon"
      />
    ));
    expect(wrapper.find('').text()).toEqual('');
});