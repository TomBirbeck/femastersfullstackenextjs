'use client';

import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { register, signin } from '@/lib/api';
import Button from './Button';
import Input from './Input';
import Card from './Card';

const registerContent = {
  linkUrl: '/signin',
  linkText: 'Already have an account?',
  header: 'Create a new account',
  subheader: 'Just a few things to get started',
  buttonText: 'Register',
};

const signinContent = {
  linkUrl: '/register',
  linkText: "Don't have an account?",
  header: 'Welcome Back',
  subheader: 'Enter your credentials to access your account',
  buttonText: 'Sign In',
};
