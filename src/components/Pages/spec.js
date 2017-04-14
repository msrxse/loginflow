import HomePage from './HomePage';
import { shallow } from 'enzyme';

describe('HomePage', () => {

  const props = {
    tracks: [{ title: 'x' }, { title: 'y' }],
  };

  it('shows two elements', () => {
    const element = shallow(<HomePage { ...props } />);

    expect(element.find('.track')).to.have.length(2);
  });

});
