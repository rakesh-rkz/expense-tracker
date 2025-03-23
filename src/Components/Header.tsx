
  import {
    Box,
    Button,
    Group,
  } from '@mantine/core';
  import classes from '../assets/Css/Header.module.css';
  
  
  export function Header() {
  
    return (
      <Box pb={20}>
        <header className={classes.header}>
          <Group justify="end" h="100%">
            <Group>
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Group>
  
          </Group>
        </header>
      </Box>
    );
  }