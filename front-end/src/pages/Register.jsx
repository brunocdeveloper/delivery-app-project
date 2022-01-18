import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';
import registerUser from '../api/register';
import { BtnRegister, ContainerSection,
  EmailInput,
  EmailRegister,
  InputName,
  NameRegister,
  PasswordInput,
  PasswordRegister,
  TitleRegister } from '../styles/components/register/style';

export default function Register() {
  const {
    rgName,
    setRgName,
    rgEmail,
    setRgEmail,
    rgPwd,
    setRgPwd,
    rgRole,
    err,
    validName,
    isValidEmail,
    validPwd,
    vldtPwd,
    vldtName,
    vldtEmail,
    setErr,
    handleLoginSubmit,
    handleChangeInputs,
    redirectTo,
    setRedirectTo,
  } = useContext(AppContext);

  useEffect(() => {
    if (validName && isValidEmail && validPwd) {
      return setErr(false);
    }
    setErr(true);
  }, [rgEmail, rgName, rgPwd]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = { rgName, rgEmail, rgPwd, rgRole };
    const registered = await registerUser(payload);
    if (!registered) return;
    await handleLoginSubmit();
  };

  const handleOnChangeInput = (e) => {
    switch (e.target.name) {
    case 'name':
      setRgName(e.target.value);
      vldtName(e.target.value);
      break;
    case 'email':
      setRgEmail(e.target.value);
      vldtEmail(e.target.value);
      handleChangeInputs(e);
      break;
    case 'password':
      setRgPwd(e.target.value);
      vldtPwd(e.target.value);
      handleChangeInputs(e);
      break;
    default:
      break;
    }
  };

  useEffect(() => {
    console.log('');
    return () => {
      setRedirectTo({ ...redirectTo, shouldRedirect: false });
    };
  }, []);

  if (redirectTo.shouldRedirect) return <Redirect to={ redirectTo.pathName } />;

  return (
    <ContainerSection className="registerContainer">
      <TitleRegister className="appalmirinha">Cadastro</TitleRegister>
      <form
        className="register-form"
      >
        <div>
          <NameRegister className="placeE">Name:</NameRegister>
          <InputName
            type="text"
            name="name"
            id="name"
            value={ rgName }
            onChange={
              (e) => { handleOnChangeInput(e); }
            }
            data-testid="common_register__input-name"
          />
        </div>
        <div>
          <EmailRegister className="placeE">Email:</EmailRegister>
          <EmailInput
            type="text"
            name="email"
            id="email"
            value={ rgEmail }
            onChange={
              (e) => { handleOnChangeInput(e); }
            }
            data-testid="common_register__input-email"
          />
        </div>
        <div>
          <PasswordRegister className="placeS">Senha:</PasswordRegister>
          <PasswordInput
            type="password"
            name="password"
            id="password"
            value={ rgPwd }
            onChange={
              (e) => { handleOnChangeInput(e); }
            }
            data-testid="common_register__input-password"
          />
        </div>
      </form>
      <BtnRegister
        type="submit"
        data-testid="common_register__button-register"
        disabled={ err }
        onClick={ (e) => handleSubmit(e) }
      >
        Cadastrar
      </BtnRegister>
      <span data-testid="common_register__element-invalid_register">{ err }</span>
    </ContainerSection>
  );
}
