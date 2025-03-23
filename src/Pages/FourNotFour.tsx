import { Button, Container, Group, Title } from '@mantine/core';
import classes from '../assets/Css/FourNotFour.module.css';
import { useNavigate } from 'react-router-dom';
useNavigate

export const FourNotFour = () => {
    const navigate = useNavigate()
    return (
        <Container className={classes.root}>
            <div className={classes.label}>404</div>
            <Title className={classes.title}>You have found a secret place.</Title>
            <span className={classes.description}>
                Unfortunately, this is only a 404 page. You may have mistyped the address,
                or the page has been moved to another URL.
            </span>
            <Group justify="center">
                <Button variant="subtle" size="md" onClick={ ()=>{
                    navigate("/")
                }}>
                    Take me back to home page
                </Button>
            </Group>
        </Container>
    );
}
