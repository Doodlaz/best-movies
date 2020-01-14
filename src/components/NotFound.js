import React from 'react'
const Error = ({ permission = false }) => <div>{permission ? 'permission denied' : 'error'}</div>
export default Error
