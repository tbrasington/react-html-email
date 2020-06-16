import React from 'react'
import PropTypes from 'prop-types'
import EmailPropTypes from '../PropTypes'
import includeDataProps from '../includeDataProps'

export default function A(props) {
  return (
    <a
      {...includeDataProps(props)}
      className={props.className}
      id={props.id}
      download={props.download}
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: props.color,
        textDecoration: props.textDecoration,
        ...props.style,
      }}
    >
      {props.children}
    </a>
  )
}

A.propTypes = {
  href: PropTypes.string.isRequired,
  download: PropTypes.string,
  color: PropTypes.string,
  textDecoration: PropTypes.string,
  style: EmailPropTypes.style,
  children: PropTypes.node,
  id : PropTypes.string,
  className : PropTypes.string,
},

A.defaultProps = {
  textDecoration: 'underline',
  href: undefined,
  download: undefined,
  color: undefined,
  style: undefined,
  children: undefined,
  id : undefined,
  className: undefined,
}
