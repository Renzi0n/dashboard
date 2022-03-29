import React from 'react';
import { Button, Avatar } from '@mui/material';
import { Logo } from '../../shared';
import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.header__nav}>
        <Button variant="outlined">Upgrade</Button>
        <Avatar alt="User avatar" src="/" />
      </nav>
    </header>
  );
}
