import GetMYLocationButton from "~features/GetMyLocationButton"

import "~style.css"

function IndexPopup() {
  return (
    <div className="plasmo-flex plasmo-items-center plasmo-justify-center plasmo-h-16 plasmo-w-40 h-500 w-500">
      <GetMYLocationButton />
    </div>
  )
}

export default IndexPopup
