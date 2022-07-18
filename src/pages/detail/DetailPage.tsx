import React from 'react'
import { useParams } from 'react-router-dom'

interface MatchParams {
  touristRouteId: number
}

export const DetailPage: React.FC<MatchParams> = () => {
  const { touristRouteId } = useParams()
  return (
    <>
      <h1>里有路线详情页面，路线ID是:{touristRouteId}</h1>
    </>
  )
}
