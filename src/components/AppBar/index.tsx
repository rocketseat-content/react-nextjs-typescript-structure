import React, { useEffect, useRef, useState } from 'react'
import { AppBarContainer } from '../../styles/pages/components/AppBar/index'

const AppBar: React.FC = () => {
  const [items, setItems] = useState([
    { id: '001', tittle: 'Home', icon: 'fa fa-home' },
    { id: '002', tittle: 'Profile', icon: 'fa fa-user-o' },
    { id: '003', tittle: 'Message', icon: 'fa fa-commenting-o' },
    { id: '004', tittle: 'Help', icon: 'fa fa-question-circle' },
    { id: '005', tittle: 'Settings', icon: 'fa fa-cog' },
    { id: '006', tittle: 'Sing-Out', icon: 'fa fa-sign-out' }
  ])

  const activeSlideRef = useRef(null)

  const toggleApp = props => {
    props.currentTarget.classList.toggle('active')
    document.querySelector('.navigation').classList.toggle('active')
  }

  useEffect(() => console.log(items), [])

  return (
    <AppBarContainer>
      <div draggable="true" className="navigation">
        <ul>
          {items.map(item => (
            <li {...items} key={item.id}>
              <a href="#">
                <span className="icon">
                  <i className={item.icon} />
                </span>
                <span className="tittle">{item.tittle}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="toggle" onClick={toggleApp} />
    </AppBarContainer>
  )
}

export default AppBar
