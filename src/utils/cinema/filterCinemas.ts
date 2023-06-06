import { CinemaFilter, CinemaItem, CinemaSort } from "@/types/cinema"


export const filterCinemas = (cinemas:CinemaItem[], filter:CinemaFilter) => {
  let rltCinemas = cinemas
  const { districtId, sort } = filter
  if (districtId && districtId !== 0) {
    rltCinemas = cinemas.filter(cinema => cinema.district.districtId === districtId)
  }

  switch (sort) {
    case CinemaSort.PriceAsc:
      rltCinemas = rltCinemas.sort((a, b) => a.lowPrice - b.lowPrice)
      break
    case CinemaSort.PriceDesc:
      rltCinemas = rltCinemas.sort((a, b) => b.lowPrice - a.lowPrice)
      break
    case CinemaSort.DistanceAsc:
      rltCinemas = rltCinemas.sort((a, b) => b.distance - a.distance)
      break
    case CinemaSort.DistanceDesc:
      rltCinemas = rltCinemas.sort((a, b) => b.distance - a.distance)
      break
  }

  return rltCinemas
}
