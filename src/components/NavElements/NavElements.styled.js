import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom'

export const Link = styled(NavLink)`
    padding: 14px 0 14px 0;
    font-size: 1.25rem;
    font-weight: 500;

    &:last-child {
        margin-left: 15px;
    }

    &:hover {
        color: white;
    }
`