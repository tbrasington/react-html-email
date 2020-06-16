import React from 'react'
import PropTypes from 'prop-types'
import EmailPropTypes from '../PropTypes'
import includeDataProps from '../includeDataProps'

export default function Col(props) {
  return (
    <td
      {...includeDataProps(props)}
      id={props.id}
      className={props.className}
      align={props.align}
      valign={props.valign}
      bgcolor={props.bgcolor}
      colSpan={props.colSpan}
      style={props.style}
      width={props.width}
    >
      {props.children}
    </td>
  )
}

Col.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  bgcolor: PropTypes.string,
  colSpan: PropTypes.number,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  valign: PropTypes.oneOf(['top', 'middle', 'bottom']),
  style: EmailPropTypes.style,
  width: PropTypes.string,
  children: PropTypes.node,
}

Col.defaultProps = {
  colSpan: null,
  children: null,
  id: null,
  className: null,
  bgcolor: null,
  align: 'center',
  valign: 'top',
  style: null,
  width: null,
}
