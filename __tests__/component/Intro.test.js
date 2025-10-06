import Intro from '@a'
import { render } from '@testing-library/react-native';

test('renders correctly', () => {
  const tree = render(<Intro />);
  expect(tree).toHaveDisplayValue('Welcome')
});
