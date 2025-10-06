import { fireEvent, render, waitFor } from '@testing-library/react-native';

import Dashboard from '@app-screen/Dashboard';

test('renders correctly', () => {
  const { toJSON } = render(<Dashboard />);
  expect(toJSON()).toMatchSnapshot();
});

describe('Intro Component test flow', () => {

  it('Should render with title props', () => {
    const screen = render(<Dashboard />);
    const detailButton = screen.getByTestId('detail-button');
    expect(detailButton).toBeOnTheScreen();
  });

  it('Button Detail onPress', async () => {
    const screen = render(<Dashboard />);
    const detailButton = screen.getByTestId('detail-button');

    fireEvent.press(detailButton);

    await waitFor(() => {
      expect(() => screen.getByText('Bắt đầu!')).toThrow();
    })
  });
});
