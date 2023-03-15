import { Dayjs } from 'dayjs'

export interface IFilterOptions{
  car: string;
  route: string;
  from: Dayjs;
  to: Dayjs;
  driver: string;
  tripDuration: number
}
