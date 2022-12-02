import { useState } from 'react'
import './TopBar.css'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const TopBar = () => {
  // const [profileModal, setProfileModal] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  return (
    <div>
      <div className="topBar-Container">
        <div className="topBar-Header">
          <div className="topBar-addCourse">Add&nbsp;Courses</div>
          <div className="topBar-headerIcons">
            <div className="topBar-publish">
              <div className="topBar-publishText">Publish to web</div>
              <div className="topBar-publishIcon">
                <img
                  src={require('../../assets/icons/Web_upload.png')}
                  alt=""
                  className="toolBar-publishImg"
                />
              </div>
            </div>
            <div
              className="topBar-profile"
              onClick={toggleDrawer}
              // onClick={() => {
              //   setProfileModal(false)
              // }}
            >
              <div className="topBar-profileItem">
                <img
                  src={require('../../assets/Screenshot 2022-05-16 104609.png')}
                  alt=""
                  className="topBar-profileIcon"
                />
              </div>
              <div className="topBar-profileText">Manjay Gupta</div>
            </div>
          </div>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
      >
        <div className="topBar-drawer">Hello World</div>
      </Drawer>
    </div>
  )
}

export default TopBar
