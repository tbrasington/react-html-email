import React from 'react'
import PropTypes from 'prop-types'
import EmailPropTypes from '../PropTypes'
import includeDataProps from '../includeDataProps'

export default function Item(props) {
  return (
    <tr>
      <td
        {...includeDataProps(props)}
        id={props.id}
        className={props.className}
        align={props.align}
        valign={props.valign}
        bgcolor={props.bgcolor}
        style={props.style}
      >
        {props.children}
      </td>
    </tr>
  )
}

Item.propTypes = {
  id : PropTypes.string,
  className: PropTypes.string,
  bgcolor: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  valign: PropTypes.oneOf(['top', 'middle', 'bottom']),
  style: EmailPropTypes.style,
  children: PropTypes.node,
}

Item.defaultProps = {
  id : undefined,
  className: undefined,
  bgcolor: undefined,
  align: undefined,
  valign: undefined,
  style: undefined,
  children: undefined,
}
