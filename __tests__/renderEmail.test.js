import React from 'react'
import kitchenSink from '../examples/kitchenSink'
import { A } from '../src/index'

describe('renderEmail', () => {
  let renderEmail

  beforeEach(() => {
    jest.restoreAllMocks()
    jest.resetModules()
    renderEmail = require('../src/renderEmail').default
  })

  it('produces expected output from a kitchen sink example', () => {
    const actualOutput = renderEmail(kitchenSink)
    const expectedOutput = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html lang="en" xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/><title>Test Email</title><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&amp;display=swap"/><style type="text/css">@media only screen and (max-device-width: 480px) {font-size: 20px !important;}</style></head><body style="width:100%;margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%"><table width="100%" height="100%" cellPadding="0" cellSpacing="0" border="0" align="left" valign="top"><tbody><tr><td align="center" valign="top"><table width="600" align="center" cellPadding="0" cellSpacing="0" border="0" valign="top"><tbody><tr><td><span style="font-family:sans-serif;font-size:15px;line-height:15;color:#000">Hello, world!</span></td></tr><tr><td><table cellSpacing="20" width="100%" style="border-top:3px solid black" cellPadding="0" border="0" align="left" valign="top"><tbody><tr><td><span style="font-family:sans-serif;font-size:14px;line-height:20;color:gray">Generated by <a href="https://github.com/chromakode/react-html-email" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">react-html-email</a></span><img data-mc-bar="bar" data-mc-baz="baz" alt="react" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/React.js_logo.svg/100px-React.js_logo.svg.png" width="100" height="100" style="display:block;outline:none;border:none;text-decoration:none"/><a download="https://raw.githubusercontent.com/chromakode/react-html-email/master/examples/kitchenSink.js" href="https://raw.githubusercontent.com/chromakode/react-html-email/master/examples/kitchenSink.js" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">Source code</a></td></tr></tbody></table></td></tr><tr><td><tr align="center" valign="top"><td align="center" valign="top">Column1</td><td align="center" valign="top">Column2</td></tr></td></tr></tbody></table></td></tr></tbody></table></body></html>' 
    expect(actualOutput).toBe(expectedOutput)
  })

  it('warns on usage of an unsupported property', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation()
    const actualOutput = renderEmail(<A href="#test" style={{ listStylePosition: 'inside' }} />)
    const expectedOutput = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><a href="#test" target="_blank" rel="noopener noreferrer" style="text-decoration:underline;list-style-position:inside"></a>'
    expect(actualOutput).toBe(expectedOutput)
    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledWith('Warning: Failed prop type: Style property `list-style-position` supplied to `A` unsupported in: outlook, outlook-web.\n    in A')
  })
})
