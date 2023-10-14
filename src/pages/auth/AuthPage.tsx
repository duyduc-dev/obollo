import { ButtonDark, LinkButton } from '@components/common/Button';
import { GoogleIcon } from '@components/icons';
import { RoutesPath } from '@constants';
import { yupResolver } from '@hookform/resolvers/yup';
import { ELanguageResources } from '@i18n';
import cn from '@libs/clsx';
import { LoginForm } from '@types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { PiEyeLight, PiEyeSlashLight } from 'react-icons/pi';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';

import style from './auth.module.scss';
import Input from './components/Input';

const AuthPage = () => {
  const { t } = useTranslation(ELanguageResources.Common);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const loginSchema = Yup.object().shape({
    email: Yup.string().required(t('validate.requiredField', { field: t`email` })),
    password: Yup.string().required(t('validate.requiredField', { field: t`password` })),
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<LoginForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(loginSchema),
  });

  const handleSubmitLogin = handleSubmit((values) => {
    // eslint-disable-next-line no-console
    console.log('~ values ->', values);
    navigate(RoutesPath.home.path);
  });

  const handleToggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <div className={style.container}>
      <div className={style.obillo}>
        <span>Obillo</span>
      </div>
      <h3 className={style.signIn}>{t`signIn`}</h3>
      <ButtonDark className={style.btnGoogle}>
        <GoogleIcon />
        {t`continueWithGoogle`}
      </ButtonDark>
      <p className={cn(style.signInContent)}>{t`orEnterWithYourEmail`}</p>
      <form onSubmit={handleSubmitLogin} className={style.formSignIn}>
        <Input
          placeholder={t`email`}
          {...register('email')}
          containerClassName={style.inputField}
          hasError={!!errors.email}
        />
        <span className={style.messageError}>{errors.email?.message}</span>
        <Input
          type={showPassword ? 'text' : 'password'}
          placeholder={t`password`}
          {...register('password')}
          containerClassName={style.inputField}
          hasError={!!errors.password}
          rightSection={
            <LinkButton className={style.btnShowPassword} onClick={handleToggleShowPassword} type="button">
              {showPassword ? <PiEyeLight size={20} /> : <PiEyeSlashLight size={20} />}
            </LinkButton>
          }
        />
        <span className={style.messageError}>{errors.password?.message}</span>
        <div>
          <LinkButton className={style.forgotPassword}>{t`forgotPassword`}</LinkButton>
        </div>
        <ButtonDark type="submit" className={style.btnSignIn}>{t`signIn`}</ButtonDark>
      </form>
    </div>
  );
};

export default AuthPage;
