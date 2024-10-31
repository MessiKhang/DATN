import React from "react";
import { NavLink } from "react-router-dom";
import { RowMenu } from "./style";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <RowMenu className={styles.nav}>
      <ul>
        <li className={styles.menuli}>
          <NavLink to="/">Trang Chủ</NavLink>
        </li>
        <li className={styles.menuli}>
          <NavLink to="/">Giới Thiệu</NavLink>
        </li>

        <li className={styles.menucon}>
          <NavLink className={styles.navli}>Sản Phẩm</NavLink>

          <ul className={styles.submenu}>
            <li className={styles.menulicon}>
              <NavLink>Pizza</NavLink>
            </li>
            <li className={styles.menulicon}>
              <NavLink>Khai Vị</NavLink>
            </li>
            <li className={styles.menulicon}>
              {" "}
              <NavLink to="/products">Salad</NavLink>
            </li>
            <li className={styles.menulicon}>
              <NavLink>Thức Uống</NavLink>
            </li>
          </ul>
        </li>

        <li className={styles.menuli}>
          <NavLink to="/">Tin Tức</NavLink>
        </li>
        <li className={styles.menuli}>
          {" "}
          <NavLink to="/">Liên Hệ</NavLink>
        </li>
        <li className={styles.menuli}>
          {" "}
          <NavLink to="/">Hỗ Trợ</NavLink>
        </li>
        <li className={styles.menuli}>
          <NavLink to="/">Hệ Thống Cửa Hàng</NavLink>
        </li>
        <li className={styles.menuli}>
          <NavLink to="/datban">Đặt Bàn</NavLink>
        </li>
      </ul>
    </RowMenu>
  );
};

export default Menu;
