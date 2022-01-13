import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
    box-sizing:border-box;
    padding: 0;
    margin: 0;
    font-family:Segoe-Print;
    }
`;

export const Container = styled.div`
    max-width:1300px;
    margin: 0 50px;
    padding: 0 50px;
    z-index: 1;

    @media screen and (max-width:991px){   
    padding: 0 2px;
    }
`;

export const Button = styled.button`
    border-radius: 5px;
    background: ${({primary}) => (primary ? '#4b59f7' : '#0467fb')};
    white-space:nowrap;
    padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
    color:#fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline:none;
    border:none;
    cursor: pointer;
    margin-top: ${({mt}) => (mt ? '40px' : '0')};


    &:hover{
        transition: all 0.3s ease-out;
        background:#fff;
        background: ${({primary}) => (primary ? '#0467fb': '#4b59f7' )};

    }
    @media screen and (max-width:960px){
        width:100%;
    }
`

export default GlobalStyle;