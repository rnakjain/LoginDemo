import styled from "styled-components";

export const Box = styled.div`
    background:white;
    width:300px;
    border-radius:6px;
    margin: 0 auto 0 auto;
    padding:0px 0px 70px 0px;
    border: #2980b9 4px solid; 
`;
export const H1 = styled.h1`
    font-size:1.5em;
    color:#525252;
`
export const EmailInput = styled.input`
    background:#ecf0f1;
    border: #ccc 1px solid;
    border-bottom: #ccc 2px solid;
    padding: 8px;
    width:250px;
    color:#AAAAAA;
    margin-top:10px;
    font-size:1em;
    border-radius:4px;
`
export const PasswordInput = styled.input`
    border-radius:4px;
    background:#ecf0f1;
    border: #ccc 1px solid;
    padding: 8px;
    width:250px;
    font-size:1em;
`
export const SignInDiv = styled.div`
    background:#2ecc71;
    width:125px;
    padding-top:5px;
    padding-bottom:5px;
    color:white;
    border-radius:4px;
    border: #27ae60 1px solid;
    opacity: ${(props) => props.error ? 0.5 : 1};
    margin-top:20px;
    margin-bottom:20px;
    float:left;
    margin-left:16px;
    font-weight:800;
    font-size:0.8em;
`;