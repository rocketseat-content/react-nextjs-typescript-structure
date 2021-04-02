import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export default function DragMove(props): React.FC {
  const {
    onPointerDown,
    onPointerUp,
    onPointerMove,
    onDragMove,
    children,
    style,
    className
  } = props

  const [isDragging, setIsDragging] = useState(false)

  const handlePointerDown = e => {
    setIsDragging(true)

    onPointerDown(e)
  }

  const handlePointerUp = e => {
    setIsDragging(false)

    onPointerUp(e)
  }

  const handlePointerMove = e => {
    if (isDragging) onDragMove(e)

    onPointerMove(e)
  }

  useEffect(() => {
    window.addEventListener('pointerup', handlePointerUp)

    return () => {
      window.removeEventListener('pointerup', handlePointerUp)
    }
  }, [])

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      style={style}
      className={className}
    >
      {children}
    </div>
  )
}

const { func, element, shape, bool, string } = PropTypes

DragMove.propTypes = {
  onDragMove: func.isRequired,
  onPointerDown: func,
  onPointerUp: func,
  onPointerMove: func,
  children: element,
  style: shape({}),
  className: string
}

DragMove.defaultProps = {
  onPointerDown: () => {},
  onPointerUp: () => {},
  onPointerMove: () => {}
}
