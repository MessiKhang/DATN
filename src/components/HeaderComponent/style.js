import { Row } from "antd";
import styled from "styled-components";

export const TopHeader = styled.div`
  background-color: #006a31;
  text-align: center;
  max-width: 100%;
  height: 25px;
  padding: 5px 0px;
  color: white;
`;

export const WrapperHeader = styled(Row)`
  padding: 10px 80px;
  background-color: white;
  max-width: 100%;
  height: 100px;
  align-item: center;
`;
export const Menu = styled.div`
  background-color: #006a31;
  text-align: center;
`;
export const Search = styled.div`
  display: flex;
`;

export const Input = styled.input`
  width: 400px;
  border: none;
  background-color: rgb(229, 220, 220);
  border-radius: 10px;
  outline: none;
  margin-left: 10px;
  &:hover {
    color: black;
    border: none;
  }
`;
export const Button = styled.button`
  padding: 11px 20px;
  background-color: #e31837;
  color: #fff;
  width: 95px;
  border: none;
  border-radius: 5px;
`;
export const Logo = styled.div`
  width: 186px;
  height: 79px;
`;
export const WrapperAccout = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  position: absolute;
  padding-left: 250px;
  margin-top: 14px;
`;
export const ButtonOrder = styled.div`
  position: absolute;
  width: 250px;
  margin-top: 20px;
`;
export const Button1 = styled.button`
  background-color: #e31837;
  color: #fff;
  width: 120px;
  height: 40px;
  margin-right: 20px;
  border-radius: 15px;
  border: none;

  &:hover {
    background-color: #006a31;
  }
`;
export const Button2 = styled.button`
  background-color: #e31837;
  color: #fff;
  width: 90px;
  height: 40px;
  border-radius: 15px;
  border: none;

  &:hover {
    background-color: #006a31;
  }
`;

export const BoxCart = styled.div`
  position: absolute;
  display: flex;
  right: 1px;
  top: 10px;
  width: 110px;
  height: 50px;
`;
export const Cart = styled.div`
  font-size: 16px;
  padding-top: 12px;
  padding-left: 3px;
`;
