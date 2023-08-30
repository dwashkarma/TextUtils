import React from 'react'

function Alerts(props) {
  return (
    // {Props.alert &&} is  used to clearify if the alert is null the other components wont run else it will run.
    props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
  <strong>{props.alert.type}</strong>: {props.alert.message}
</div>

  )
}

export default Alerts