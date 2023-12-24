import React, { useState } from 'react'
import styles from './login.module.scss'
import InputBox from '@/components/molecules/inputBox/inputBox'
import Button from '@/components/atoms/buttons/button'
import { Toaster } from 'react-hot-toast'
import { notify } from '@/config/error'
import login from '@/controllers/login'

const LoginPage = () => {
  
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUserNameChange = ( event ) => {
    setUserName(event);
  }

  const handlePasswrodChange = (event) => {
    setPassword(event);
  };

  const handleLogin = async () => {
    let errors = []
    if(userName.length < 3) {
      errors.push('please write a valid username')
    }
    if(password.length < 3) {
      errors.push('please write a valid password')
    }
    if (errors.length > 0) {
      notify(errors[0]);
    } else
    {
      const response = await login.submitLogin( userName , password )
      if ( response ) {
        console.log( response );
      }
    }
  }

  return <>
    <div className={styles.login} style={{ backgroundImage:"url(/images/login/bg.webp)" }} >
        <div className={styles.LoginCard} >
          <h4 className={styles.loginTitle}>Neuralboard <span>Access</span></h4>
            <div className={styles.form} >
                <InputBox value={userName} valueChange={handleUserNameChange} type="text" label="Username" />
                <InputBox value={password} valueChange={handlePasswrodChange} type="password" label="Password" />
            </div>
            <Button onClick={handleLogin} fullWidth primary={true} > Login </Button>
            <div className={styles.subButton} >
              <Button fullWidth secondary={true} > Contact our friendly support </Button>
            </div>
        </div>
        <Toaster position="bottom-right" reverseOrder={true} />
    </div>
  </>
}

export default LoginPage