import {  Col} from 'antd'
import React from 'react'
import {  WrapperHeader, TopHeader, Search, Input, Button, Logo, WrapperAccout, ButtonOrder, Cart, Button1,Button2, BoxCart} from './style'
import Image from './Images/logo.webp'
import { UserOutlined, DownSquareOutlined,ShoppingCartOutlined} from '@ant-design/icons';
import "./style.module.css"
const Header = () => {
  return (
    <div>
      <TopHeader>
        <Col style={{fontSize:'16px', fontFamily:'sans-serif',marginTop:'3px'}} span={24}>Đặt Ngay Món Ăn Yêu Thích Của Bạn</Col>
      </TopHeader>

      <WrapperHeader>
        <Col span={4} style={{}}>
          <Logo>
        <img  src={Image} alt="logo Ảnh" style={{width: '186px',height:'79px'}} /></Logo>
        </Col>

        <Col span={10} style={{ position:'relative'}}>
          <Search style={{position:'absolute', marginTop:'22px'}}>
          <Button>Tìm kiếm</Button>
            <Input type="text" class="search-input" placeholder="Bạn muốn tìm gì?" style={{paddingLeft:'20px'}}/>
            
          </Search>
        </Col>

        <Col span={10} style={{position:'relative'}}>
        <WrapperAccout>
            <UserOutlined style={{fontSize:'30px',color:'#006a31'}}/>
            <div>
                  <span>Đăng Nhập/Đăng kí</span>
                <div>
                    <span>Tài Khoản</span>
                    <DownSquareOutlined style={{color:'#006a31'}}/>
                </div>
            </div>
        </WrapperAccout>
        <ButtonOrder>
          <Button1 >Đặt Món Online</Button1>
          <Button2>Đặt Bàn</Button2>
        </ButtonOrder>
        <BoxCart>
          <ShoppingCartOutlined style={{color:'#e31837',fontSize:'35px'}}/>
          <Cart>Giỏ Hàng</Cart>
        </BoxCart>
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default Header;