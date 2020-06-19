import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;  
    padding: 4px 16px; 
    margin-right: 4px;  
    background-color: transparent;

    &.mention{
        background-color: var(--mention-message);
        border-left: 2px solid var(--mention-message);
        padding-left: 14px;
    }

    & + div{
        margin-top: 13px;
    }
`;

export const Avatar = styled.div`
    width: 40px;
    height: 40px;
    background-color: var(--secondary);
    border-radius: 50%;

    &.bot{
        background-color: var(--mention-detail);
    }

`;

export const Message = styled.div`
    min-height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 17px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;

    >strong{
        color: var(--white);
        font-size: 16px;
    }

    >span{
        margin-left: 6px;
        background-color: var(--discord);
        color: var(--white);
        border-radius: 4px;
        padding: 4px 5px;
        text-transform: uppercase;
        font-size: 11px;
        font-weight: bold;
    }

    >time{
        margin-left: 6px;
        color: var(--gray);
        font-size: 13px;
    }
`;

export const Content = styled.div`
    font-size: 16px;
    font-align: left;
    color: var(--white);
`;

export const Mention = styled.span`
    color: var(--link);
    cursor: pointer;

    &:hover{
        text-decoration: underline;
    }
`;


// import { ExpandMore } from 'styled-icons/material';

// export const Container = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 0 11px 0 16px;
//     background-color: var(--secondary);
//     box-shadow: rgba(0,0,0,0.2) 0px 1px 0px 0px;
//     z-index: 2;
// `;

// export const Title = styled.h1`
//     font-size: 16px;
//     font-weight: bold;
//     color: var(--white);
// `;

// export const ExpandIcon = styled(ExpandMore)`
//     width: 28px;
//     height: 28px;
//     color: var(--white);
//     cursor: pointer;
// `;
