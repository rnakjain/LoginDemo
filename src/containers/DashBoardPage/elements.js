import styled from "styled-components";

export const Nav = styled.div`
    background-color: #333;
    overflow: hidden;
    margin-top: -20px;
`;
export const Ancor = styled.a`
    float: right;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    &:hover {
        background-color: #ddd;
        color: black;
    }
`
export const AncorLeft = styled.a`
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    &:hover {
        background-color: #ddd;
        color: black;
    }
`

//Main body css

export const Wrapper = styled.div`
    width: 60%;
    display: inline-block;
`
//userList css 

export const ListDiv = styled.div`
    padding: 10px;
    text-align: left;
    border: thick solid #101010;
    border-radius: 5px;
    margin: 5px;
    `
export const DataDiv = styled.div`
    font-size: 14px;
`