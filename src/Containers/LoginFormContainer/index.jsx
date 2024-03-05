import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FormInput, IconButton } from '../../Components'
import { AuthApiService, ValidateService } from '../../Services'

import './index.css'

export const LoginFormContainer = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [isValidate, setValidate] = useState({
    email: true,
    password: true,
  })

  const onSubmit = (e) => {
    e.preventDefault()
    const isValid = {
      email: ValidateService.emailValidator(formData.email),
      password: ValidateService.passwordValidator(formData.password),
    }
    setValidate(isValid)
    if (isValid.email && isValid.password) {
      AuthApiService.Login(formData)
    }
  }

  const onChange = (e) => {
    const tempForm = { ...formData, [e.target.name]: e.target.value }
    setFormData(tempForm)
    const isValid = {
      email:
        ValidateService.emailValidator(formData.email) || formData.email === '',
      password:
        ValidateService.passwordValidator(formData.password) ||
        formData.password === '',
    }
    setValidate(isValid)
  }

  return (
    <>
      <div className="link-button-layer flex-row-stretch">
        <IconButton icon="imgs/glogo.svg" name="Google" />
        <IconButton icon="imgs/gitlogo.svg" name="Github" />
      </div>
      <div className="divide-line flex-row-stretch">
        <hr />
        <span>OR</span>
        <hr />
      </div>
      <form className="login-form flex-column" onSubmit={onSubmit}>
        <FormInput
          name="email"
          type="text"
          placeHolder="Work Email"
          value={formData.email}
          onChange={onChange}
          error={isValidate.email}
        />
        {isValidate.email === true && formData.email !== '' && (
          <FormInput
            name="password"
            type="password"
            placeHolder="password"
            classname="input-password"
            value={formData.password}
            onChange={onChange}
            error={isValidate.password}
          />
        )}
        <Link className="forgot-link" to="/forgot-password">
          Forgot your password?
        </Link>
        <input
          className="login-button"
          name="submit"
          type="submit"
          value="Log in to Qencode"
        />
      </form>
    </>
  )
}
