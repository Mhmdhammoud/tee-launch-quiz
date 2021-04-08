import React from 'react';
import {
  Container as MyContainer,
  Left,
  Center,
  Right,
  Logo,
  List,
  ListItem,
} from '../Styled';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
interface Props {
  children?: React.ReactNode;
}
interface ImageProps extends Props {
  src: string;
  alt: string;
}
interface ListItemProps {
  href: string;
  title: string;
}

export const AppBar = (props: Props) => {
  const { children } = props;
  return <MyContainer>{children}</MyContainer>;
};
AppBar.Logo = function (props: ImageProps) {
  const { src, alt } = props;
  return <Logo src={src} alt={alt} />;
};
AppBar.Left = function (props: Props) {
  const { children } = props;
  return <Left>{children}</Left>;
};
AppBar.Center = function (props: Props) {
  const { children } = props;

  return <Center>{children}</Center>;
};
AppBar.Right = function (props: Props) {
  const { children } = props;

  return <Right>{children}</Right>;
};

AppBar.LinksList = function (props: Props) {
  const { children } = props;
  return <List>{children}</List>;
};
AppBar.Link = function (props: ListItemProps) {
  const { title, href } = props;
  return (
    <ListItem>
      <Grid container>
        <Link to={`/${href}`} style={{ color: '#fff' }}>
          {title}
        </Link>
      </Grid>
    </ListItem>
  );
};
