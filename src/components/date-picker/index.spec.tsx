import { render, screen } from '@testing-library/react';
import dayjs from 'dayjs';

import { localizationProvider } from '~/common/hocs';

import DatePicker from './'
import { options } from './options';

describe('date picker', () => {
  it('should render date picker', () => {
    render(
      localizationProvider(
        <DatePicker
          label="Label"
          value={dayjs(new Date())}
          onChange={() => { }}
        />
      ));

    const component = screen.getByTestId(options.test)

    expect(component).toBeTruthy()
    expect(component).toHaveTextContent('Label')
  });
})