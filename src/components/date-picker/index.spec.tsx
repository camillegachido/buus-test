import { render, screen } from '@testing-library/react';
import dayjs from 'dayjs';

import { localizationProvider } from '~/hocs';

import DatePicker from './'
import { options } from './options';

describe('input', () => {
  it('should render input', () => {
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
  })
})