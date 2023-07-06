import Message from '../components/Message.jsx';
import { useState } from 'react';

function Login() {
  const [message, setMessage] = useState('');

  function onclick() {
    setMessage('This is an error message');
  }
  return (
    <main className=' min-h-screen flex items-start justify-center'>
      <div
        className=' w-[24rem] aspect-square max-h-fit p-6 mt-20 border border-gray-300 rounded-md
      '
      >
        <h1 className='text-2xl text-center'>Welcome Back!</h1>

        {/* show error message*/}
        {message && <Message type='error'>{message}</Message>}
        <div
          className='
        flex flex-col
        my-4
        '
        >
          <label htmlFor='email'>Username/Email</label>
          <input
            type='email'
            id='email'
            className='border-2 border-gray-400 rounded-md p-2'
          />
        </div>
        <div
          className='
        flex flex-col
        mb-6
        '
        >
          <label htmlFor='password'>password</label>
          <input
            type='password'
            id='password'
            className='border-2 border-gray-400 rounded-md p-2'
          />
        </div>
        <div>
          <button
            onClick={onclick}
            className='
          bg-orange-400
          text-white
          rounded-md
          p-2
          w-full
          hover:bg-orange-500
          focus:outline-black mb-6
          '
          >
            Login
          </button>
          <p className='text-center'>Don't have an account? </p>
        </div>
      </div>
    </main>
  );
}

export default Login;
