import styled from 'styled-components';
import logoPic from '../../statics/logo.png';
import React from "react";

export const WrapperHeader = styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a`
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100px;
    height: 56px;
    background:  url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    padding-right: 70px;
    box-sizing: border-box;
    height: 100%;
    margin: 0 auto;
`;

export const NavItem = styled.div`
    line-height: 56px;   
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left{
        float: left;
    }
    &.right{
        float: right;
        color: #969696
    };
    &.active{
        color: #ea6fba;
    }
`;

export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .zoom{
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        &.focused{
            background: #777;
            color: #fff;
        }
    }
    
`;

export const NavSerach = styled.input.attrs({
    placeholder: '搜索'
})`
   &.slide-enter{
        transition: all .2s ease-out;
    }
    &.slide-enter-active{
        width: 240px;
    }
    &.slide-exit{
        transition: all .2s ease-out;
    }
    &.slide-exit-active{
        width: 160px;
    }
    width: 160px;
    box-sizing: border-box;
    padding-right: 30px;
    padding-left: 20px;
    border-radius: 19px;
    height: 38px;
    margin-top: 9px;
    border: none;
    outline: none;
    background: #eee;
    font-size: 14px;
    margin-left: 20px;
    color: #666;
    &::placeholder{
        color: #999;
    }
    &.focused{
        width: 240px;
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 200px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background: #fff;

`;

export  const SearchInfoTitle = styled.div`
    margin-top : 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;

export const SearchInfoSwitch = styled.div`
    float: right;
    font-size: 13px;
    .spin{
        display: block;
        float: left;
        font-size: 12px;
        margin-right: 2px;
        transition: all .2s ease-in;
        transform-origin: center center;
    }
`;

export const SearchInfoItem = styled.a`
    display: block;
    line-height: 20px;
    padding: 0 5px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
    margin-right: 10px;
    margin-bottom: 15px;
    float: left;
`;

export const Addtion = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;    
    
`;

export const Button = styled.button`
    float:right;
    margin-top: 9px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    margin-right: 20px;
    padding :0 20px;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.writting{
        color: #fff;
        background: #ec6149;
    } 
`;



