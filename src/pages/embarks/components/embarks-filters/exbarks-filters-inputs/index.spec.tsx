import { render, screen } from "@testing-library/react";
import dayjs from "dayjs";
import EmbarksFiltersInputs from ".";
import { options } from "../../../options";

const filter = {
  car: '',
  route: '',
  from: dayjs(new Date()),
  to: dayjs(new Date()),
  driver: '',
  tripDuration: 0
}

describe('Embarks filters extended', () => {
  it('should render embarks filters inputs', () => {
    render(<EmbarksFiltersInputs
      filter={filter}
      updateFilter={() => { }} />);

    const component = screen.queryByTestId(options.filterInputs)

    expect(component).toBeInTheDocument();
  });
})