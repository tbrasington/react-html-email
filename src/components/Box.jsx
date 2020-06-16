import React from 'react'
import PropTypes from 'prop-types'
import EmailPropTypes from '../PropTypes'

export default function Box({ children, id, className, tbodyID, tbodyClassName, ...props }) {
  return (
    <table id={id} className={className} {...props}>
      <tbody id={tbodyID} className={tbodyClassName} >
        {children}
      </tbody>
    </table>
  )
}

Box.propTypes = {
  cellPadding: PropTypes.number,
  cellSpacing: PropTypes.number,
  border: PropTypes.string,
  bgcolor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  valign: PropTypes.oneOf(['top', 'middle', 'bottom']),
  style: EmailPropTypes.style,
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
  tbodyID: PropTypes.string,
  tbodyClassName: PropTypes.string,
}

Box.defaultProps = {
  cellPadding: 0,
  cellSpacing: 0,
  border: '0',
  align: 'left',
  valign: 'top',
  bgcolor: undefined,
  width: undefined,
  height: undefined,
  style: undefined,
  children: undefined,
  id: undefined,
  className: undefined,
  tbodyID: undefined,
  tbodyClassName: undefined,
}