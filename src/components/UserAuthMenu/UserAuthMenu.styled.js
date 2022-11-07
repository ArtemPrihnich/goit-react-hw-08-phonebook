import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavigationLink = styled(NavLink)`
    padding-right: 8px;
    font-size: 1.25em;
    font-weight: 500;

    &:last-child {
        padding-left: 8px;
        padding-right: 0;
        border-left: 1px solid black;
    }

    &.active {
        
        color: #FFFFFF;
        text-shadow: 1px 1px 0 black;
        /* border-color: ${props => props.theme.colors.secondaryTextColor}; */
    }
    :hover:not(.active),
    :focus-visible:not(.active) {
        transform: scale(1.1);
    }
`