import dayjs from "dayjs";
import { IEmbark, IEmbarkFilters } from "../../types/embarks";

const filterWithAll = (key: "car" | "route" | "driver", embark: IEmbark, filters: IEmbarkFilters) => {
  if(filters[key] === 'All')
    return true
  
  return embark[key].includes(filters[key])
}

const filterTripDuration = (embark: IEmbark, filter: IEmbarkFilters) => {
  const start = dayjs(`2000-01-01 ${embark.start}`);
  const end = dayjs(`2000-01-01 ${embark.end}`);
  let mins = start.diff(end, "minutes", true);

  if(mins < 0 )
    mins *= -1
  
  return mins > filter.tripDuration
}

const filterDate = (embark: IEmbark, filter: IEmbarkFilters) => {
  const date = dayjs(new Date(embark.date))
  const diffStart = date.diff(filter.from, "day")
  const diffEnd = filter.to.diff(date, "day")

  return diffStart >= 0 && diffEnd >= 0
}

const filterEmbarks = (embarks: IEmbark[], filters: IEmbarkFilters) => {
  const filter = (embark: IEmbark) => {

    return filterWithAll("car", embark, filters) && 
      filterWithAll("route", embark, filters) && 
      filterWithAll("driver", embark, filters) &&
      filterTripDuration(embark, filters) &&
      filterDate(embark, filters)
  }

  return embarks.filter(embark => filter(embark))
}

export default filterEmbarks