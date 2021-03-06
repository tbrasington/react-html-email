import React from 'react'
import PropTypes from 'prop-types'
import EmailPropTypes from '../PropTypes'
import includeDataProps from '../includeDataProps'

export default function Span(props) {
  const lineHeight = props.lineHeight !== undefined ? props.lineHeight : props.fontSize
  return (
    <span
      {...includeDataProps(props)}
      className={props.className}
      id={props.id}
      style={{
        fontFamily: props.fontFamily,
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        lineHeight: `${lineHeight}`,
        color: props.color,
        ...props.style,
      }}
    >
      {props.children}
    </span>
  )
}

Span.propTypes = {
  fontFamily: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  lineHeight: PropTypes.number,
  color: PropTypes.string,
  style: EmailPropTypes.style,
  children: PropTypes.node,
  id : PropTypes.string,
  className : PropTypes.string,
}

Span.defaultProps = {
  fontFamily: 'sans-serif',
  fontSize: 14,
  fontWeight: undefined,
  lineHeight: undefined,
  color: '#000',
  style: undefined,
  children: undefined,
  id : undefined,
  className: undefined,
}
