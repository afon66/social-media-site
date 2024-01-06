import React from 'react'

const Main = () => {
  return <div className="main">
    <img src="https://rayhaber.com/wp-content/uploads/2023/03/instagram.jpg" alt="" />
    <div className="profile-main">
      <img src="https://variety.com/wp-content/uploads/2022/08/Jonah-Hill.jpg?w=1000" alt="" />
      <div className="profile-discription">
        <h2>Uzun Afanasi</h2>
        <p>he</p>
        <p>Date of birthday:I have to go to the end</p>
        <p>City:</p>
        <p>Education:</p>
        <p>Web-site:</p>
      </div>
    </div>
    <h1>My posts</h1>
    <input type="text" placeholder='your news'/>
    <button type='submit'>Send</button>
  </div>
}

export default Main