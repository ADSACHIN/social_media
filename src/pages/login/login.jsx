import React from 'react';
import './login.css';

export default function Login() {
  return (
    <>
    <div className="body"></div>
    <section>
      <div className="colour"></div>
      <div className="colour"></div>
      <div className="colour"></div>
      <div className="box">
        <div className="square" style={{ '--i': 1 }}><h1>welcome</h1></div>
        <div className="square" style={{ '--i': 2 }}><h1>congra<br />dualation</h1></div>
        <div className="square" style={{ '--i': 3 }}><h1>start journey</h1></div>
        <div className="square" style={{ '--i': 4 }}><h1>well done</h1></div>
        <div className="square" style={{ '--i': 5 }}><h1>hi</h1></div>
        <div className="square" style={{ '--i': 6 }}><h1>good to see u</h1></div>
      </div>
      <div className="container">
        <div className="form">
          <h1 style={{ fontStyle: 'merriweather', fontSize: '20px' }} className='login'>Login Form</h1>
          <form action="login.php" method="post">
            <div className="input__box">
              <input type="text" placeholder="Username" style={{ color: 'black' }} name=" " />
            </div>
            <div className="input__box">
              <input type="password" placeholder="Password" style={{ color: 'black' }} />
            </div>
            <div className="input__box">
              <input type="submit" value="Login" style={{ color: 'black' }} />
            </div>
            <p className="forget" style={{ color: 'black' }}>
              Forgot Password? <a href="#">Click Here</a>
            </p>
            <p className="forget" style={{ color: 'black' }}>
              Don't have an account? <a href="#">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
      </section>
    </>
  );
}
