import React from 'react'

const Home = () => {
  return (
    <div>
        <h1 className="text-4x1 font-bold text-center">Hello React</h1>
        <button style={{backgroundcolor : 'black', color: 'white', padding: 10}}>
          Home Button
          </button>
          <br />
          <input type="text" />

          <button className="submit-btn">Home button</button>
          <button className="btn">another button</button>

          <img src="/minions.avif.jpeg" alt="" />


    </div>
  )
}

export default Home;