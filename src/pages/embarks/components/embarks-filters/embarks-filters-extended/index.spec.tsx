import { screen } from '@testing-library/react';
import dayjs from 'dayjs';

import { render } from '~/common/utils/test'

import EmbarksFiltersExtended from '.';
import { options } from '../../../options';

const filter = {
  car: '',
  route: '',
  from: dayjs(new Date()),
  to: dayjs(new Date()),
  driver: '',
  tripDuration: 0
}

describe('Embarks filters extended', () => {
  it('should render embarks filters extended', () => {
    render(<EmbarksFiltersExtended
      filter={filter}
      updateFilter={() => { }} />);

    const component = screen.queryByTestId(options.filterExpanded)

    expect(component).toBeInTheDocument();
  });
})