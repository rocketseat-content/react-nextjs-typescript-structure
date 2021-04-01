import React, { useEffect, useState } from 'react'

const Footer: React.FC = () => {
  const [items, setItems] = useState([
    { id: '001', tittle: 'Home', icon: 'fa fa-home' },
    { id: '002', tittle: 'Profile', icon: 'fa fa-user-o' },
    { id: '003', tittle: 'Message', icon: 'fa fa-commenting-o' },
    { id: '004', tittle: 'Help', icon: 'fa fa-question-circle' },
    { id: '005', tittle: 'Settings', icon: 'fa fa-cog' },
    { id: '006', tittle: 'Sing-Out', icon: 'fa fa-sign-out' }
  ])
  useEffect(() => console.log(items), [items])

  return (
    <ul>
      {items.map(item => (
        // eslint-disable-next-line react/jsx-key
        <li>{item.tittle}</li>
      ))}
    </ul>
  )
}

export default Footer
