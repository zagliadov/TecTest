import { render, screen } from '@testing-library/react';
import { MemberInfo } from './MemberInfo';

const email = 'Sincere@april.biz';

describe('MemberInfo component', () => {

  test('MemberInfo render', async () => {
    render(<MemberInfo />);

    await expect(screen.getByText('Sincere@april.biz')).toBeInTheDocument()
  })
})