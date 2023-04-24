import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './SignUpFormStyles.css'

const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
    })

  const handleChange = e => {
      props.updateMessage('')
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
    }
  }

  return(
    <form
      autoComplete='off'
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div>
        <label>Name</label>
      </div>
      <div>
        <label>Email</label>
      </div>
      <div>
        <label>Password</label>
      </div>
      <div>
        <label>Confirm Password</label>
      </div>
      <div>
        <button>Sign Up</button>
        <button>Cancel</button>
      </div>
    </form>
  )
}

export SignupForm