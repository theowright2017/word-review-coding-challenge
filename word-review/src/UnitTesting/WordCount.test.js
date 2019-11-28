import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WordCount from '../Containers/WordCount';

Enzyme.configure({ adapter: new Adapter() });

describe('WordCount', () => {
  it('should contain data', () => {
    const wrapper = mount(<WordCount />);
    expect(wrapper.state('data')).toEqual(
      ["A great product for daily use",
      "Great price. Takes about 10days for delivery",
      "Excellent value - will buy again",
      "Fine, I always use this, was as expected",
      "Good value",
      "excellent product, good value",
      "good",
      "does the job!",
      "Thank you",
      "Great it's that is easy to use",
      "I hated it",
      "arrived on time, excellent product, thank you",
      "quick service great price.",
      "good and refreshing",
      "My daughter is road testing this, but so far it's refreshing",
      "DO NOT BUY THIS PRODUCT",
      "Avoid",
      "Did not notice any difference",
      "Horrible taste",
      "Does its job and shows it works"]
    )
  })
  it('should have array joined to string', () => {
    const wrapper = mount(<WordCount />);
    expect(wrapper.state('joinedArrayState')).toEqual(
      ["A great product for daily use",
      "Great price. Takes about 10days for delivery",
      "Excellent value - will buy again",
      "Fine, I always use this, was as expected",
      "Good value",
      "excellent product, good value",
      "good",
      "does the job!",
      "Thank you",
      "Great it's that is easy to use",
      "I hated it",
      "arrived on time, excellent product, thank you",
      "quick service great price.",
      "good and refreshing",
      "My daughter is road testing this, but so far it's refreshing",
      "DO NOT BUY THIS PRODUCT",
      "Avoid",
      "Did not notice any difference",
      "Horrible taste",
      "Does its job and shows it works"]
      .join(' ')
    )
  })
  it('should be lower case and chars removed', () => {
    const wrapper = mount(<WordCount />);
    expect(wrapper.state('stringArrayState')).toEqual(
      ["A great product for daily use",
      "Great price. Takes about 10days for delivery",
      "Excellent value - will buy again",
      "Fine, I always use this, was as expected",
      "Good value",
      "excellent product, good value",
      "good",
      "does the job!",
      "Thank you",
      "Great it's that is easy to use",
      "I hated it",
      "arrived on time, excellent product, thank you",
      "quick service great price.",
      "good and refreshing",
      "My daughter is road testing this, but so far it's refreshing",
      "DO NOT BUY THIS PRODUCT",
      "Avoid",
      "Did not notice any difference",
      "Horrible taste",
      "Does its job and shows it works"]
      .join(' ')
      .toLowerCase()
      .split('.').join('')
      .split(',').join('')
      .split('!').join('')
      .split('-').join('')
      .split('  ').join(' ')
      .replace(/[0-9]/g, "")
      .split(" ")
    )
  })


  // Unsure with how to proceed further with unit testing without further research, as to whether I should be testing state and how exactly best practices are to do this.  I would be inclined also to test buttons, dynamic class names, etc.  This is my introduction to unit testing in React.




});
