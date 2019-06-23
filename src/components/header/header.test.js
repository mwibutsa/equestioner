import '../setupTest';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Header from './index';

describe('should render header component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Header />);
    });

    test('Should render home header', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})

