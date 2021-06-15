import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../AppContext';
import './Login.css';

function Login() {
  const { appDispatch } = useContext(AppContext);
  const [name, setName] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const [firstName, ...lastName] = name.split(' ');
    appDispatch({
      type: 'login',
      payload: { firstName, lastName: lastName.join(' ') }
    });
    history.push('/');
  };

  return (
    <section className='Login'>
      <div className='Login__container'>
        <header className='Login__header'>
          <h1 className='Login__heading'>facebook</h1>
          <h2 className='Login__subheading'>
            Facebook helps you connect and share with the people in your life.
          </h2>
        </header>

        <div>
          <form className='Login__form' onSubmit={handleSubmit}>
            <div>
              <input
                type='text'
                value={name}
                onChange={handleChange}
                placeholder='Enter Name'
              />
            </div>
            <button type='submit' className='btn btn-primary btn-100'>
              Login as a Guest
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
