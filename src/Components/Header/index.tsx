import React from 'react';
import { AppBar } from '../Container';
import { TextField } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const index = () => {
  return (
    <AppBar>
      <AppBar.Left>
        <AppBar.Logo
          src="https://styled-components.com/nav-logo.png"
          alt="Styled Components Logo"
        />
        <AppBar.LinksList>
          <AppBar.Link href="/contact-us" title="Contact Us" />
          <AppBar.Link href="/about-us" title="About Us" />
          <AppBar.Link href="/products" title="Our Products" />
        </AppBar.LinksList>
      </AppBar.Left>
      <AppBar.Center>
        <TextField variant="standard" onChange={(e) => console.log(e)} />
      </AppBar.Center>
      <AppBar.Right>
        <AppBar.LinksList>
          <AppBar.Link href="/login" title="Login" StartIcon={<PersonIcon />} />
          <AppBar.Link
            href="/Sign-Up"
            title="Register"
            StartIcon={<PersonIcon />}
          />
        </AppBar.LinksList>
      </AppBar.Right>
    </AppBar>
  );
};

export default index;
