import React from "react"
import { Button, Image } from "../../primitives"

function HeaderControls() {
  return (
    <div className="headerControls">
      <Button variant="transparent" label="Sign Up" />
      <div className="headerControls__pic">
        <Image src="https://picsum.photos/100/100/" alt="alt" fit="cover" />
      </div>
      <div className="headerControls__profileLink">
        <Button variant="link" label="Anna May" linkColor="#000" />
      </div>
    </div>
  )
}

export default HeaderControls
