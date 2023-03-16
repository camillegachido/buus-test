import { Typography, Box, Divider } from "@mui/material"
import { useEffect, useState } from "react"
import { IEmbark, IEmbarkFilters } from "~/common/types/embarks"

import { filterEmbarks } from '~/common/utils'
import { GetEmbarks } from "~/services/embarks"
import { EmbarksFilter } from './components'
import { EmbarksTable } from './components'

interface IPageData<T> {
  original: T
  filtered: T
}

function Embarks() {
  const [data, setData] = useState<IPageData<IEmbark[]>>(
    { original: [], filtered: [] })

  const [loading, setLoading] = useState(false)

  const applyFilters = (filter: IEmbarkFilters) => {
    setLoading(true)
    new Promise(resolve => setTimeout(resolve, 2000))
      .then(() => {
        setData({
          ...data, filtered: filterEmbarks(data.original, filter)
        })
      }).finally(() => {
        setLoading(false)
      })
  };

  useEffect(() => {
    const embarks = GetEmbarks()
    setData({ original: embarks, filtered: embarks })
  }, [])

  return <>
    <Box marginBottom='40px'>
      <Typography variant="h5" component="h1">Embarks</Typography>
      <Typography variant='subtitle2' component="h2">List of embarks per trip</Typography>
      <Divider />
    </Box>
    <EmbarksFilter onApply={applyFilters} />
    <EmbarksTable data={data.filtered} loading={loading} />
  </>
}

export default Embarks