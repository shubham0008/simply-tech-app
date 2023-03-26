/** @jsx jsx */
import {jsx, NavLink as MenuLink, Link as A} from 'theme-ui';
import NextLink from 'next/link';

interface NavLinkProps {
    path: string;
    label: string;
    children?: React.ReactNode;
}

export function NavLink({path, label, children, ...rest}: NavLinkProps) {
    return (
        <h1>NavLink</h1>
    );
}

interface LinkProps {
    path: string;
    label: string;
    children?: React.ReactNode;
}

export function Link({path, label, children, ...rest}: LinkProps) {
    return (
        <A {...rest} href={path}>
            {children || label}
        </A>
    );
}