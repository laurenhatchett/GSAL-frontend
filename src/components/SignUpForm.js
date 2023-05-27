import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './SignUpFormStyles.css'
import * as authService from '../../services/authService'

const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
    })

    const [photoData, setPhotoData] = useState({})

  const handleChange = e => {
      props.updateMessage('')
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }

  const handleChangePhoto = (evt) => {
    setPhotoData({ photo: evt.target.files[0] })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { name, email, password, passwordConf} = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return(
    <div className='input-form'>
    <form
      autoComplete='off'
      onSubmit={handleSubmit}
      className={styles.container}
    >
      
        <label htmlFor="name" className={styles.label}>Name</label>
        <input
          type="text"
          autoComplete="off"
          id="name"
          value={name}
          name="name"
          onChange={handleChange}
        />
      
      
        <label htmlFor="email" className={styles.label}>Email</label>
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={email}
          name="email"
          onChange={handleChange}
        />

        <label htmlFor="password" className={styles.label}>Password</label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={password}
          name="password"
          onChange={handleChange}
        />
      
      <label htmlFor="confirm" className={styles.label}>
          Confirm Password
        </label>
        <input
          type="password"
          autoComplete="off"
          id="confirm"
          value={passwordConf}
          name="passwordConf"
          onChange={handleChange}
        />

      <label htmlFor="photo-upload" className={styles.label}>
          Upload Photo
        </label>
        <input
          type="file"
          class='photo-input'
          id="photo-upload"
          name="photo"
          onChange={handleChangePhoto}
        />

<div class='buttons'>
          <div class='submit-button'>
            <button disabled={isFormInvalid()} className={styles.button}>
              Sign Up
            </button>
          </div>
          <Link to="/">
            <div class='submit-button'>
              <button>Cancel</button>
            </div>
          </Link>
        </div>
      </form>
    </div>

      
    
  )
}

export { SignupForm }