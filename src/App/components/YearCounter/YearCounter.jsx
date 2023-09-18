import React from 'react'
import cn from 'classnames'

import { useCounter } from 'src/hooks/useCounter'

const YearCounter = ({
  className,
  value,
  defaultValue,
}) => {
  const count = useCounter(value, defaultValue)

  return (
    <p className={className}>{count}</p>
  )
}
export default YearCounter;