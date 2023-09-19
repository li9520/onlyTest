import React from 'react'

import { useCounter } from 'src/hooks/useCounter'

type titleProps = {
  value: number;
  className: string,
  defaultValue: number,
}
const YearCounter: React.FC<titleProps> = ({
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