import { useState } from 'react';
import { Group } from '@mantine/core';
import classes from '../assets/Css/Navbar.module.css';
import Logo from "../assets/logo.png"

const data = [
    {
        link: '', label: 'Dashboard', icon: (<svg xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
        </svg>
        ),
    },
    {
        link: '', label: 'Billing', icon: (
            <svg xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
            </svg>

        )
    },
    {
        link: '', label: 'Security', icon: (
            <svg xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
        )
    },
    { link: '', label: 'SSH Keys' },
    { link: '', label: 'Databases' },
    { link: '', label: 'Authentication' },
    { link: '', label: 'Other Settings' },
];

export function Navbar() {
    const [active, setActive] = useState('Billing');

    const links = data.map((item) => (
        <a
            className={classes.link}
            data-active={item.label === active || undefined}
            href={item.link}
            key={item.label}
            onClick={(event) => {
                event.preventDefault();
                setActive(item.label);
            }}
        >
            {item.icon}
            <span style={{ marginLeft: "6px" }}>{item.label}</span>
        </a>
    ));

    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarMain}>
                <Group className={classes.header} justify="center" >
                    <img src={Logo} />
                </Group>
                {links}
            </div>

            <div className={classes.footer}>
                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    {/* <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} /> */}
                    <span>Change account</span>
                </a>

                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    {/* <IconLogout className={classes.linkIcon} stroke={1.5} /> */}
                    <span>Logout</span>
                </a>
            </div>
        </nav>
    );
}