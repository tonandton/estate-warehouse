import { useState } from "react";
import "./navbar.scss";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        <a href="" className="logo">
          <img src="/logo.png" alt="" />
          <span>Estate&WareHouse</span>
        </a>
        <a href="/">หน้าแรก</a>
        <a href="">เกี่ยวกับ</a>
        <a href="">ติดต่อ</a>
        <a href="/list">รายการ</a>
      </div>
      <div className="right">
        <a href="">เข้าสู่ระบบ</a>
        {/* <a href="" className="register">
          Sign up
        </a> */}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">หน้าแรก</a>
          <a href="">เกี่ยวกับ</a>
          <a href="">ติดต่อ</a>
          <a href="list">ตัวแทน</a>
          <a href="">เข้าสู่ระบบ</a>
          {/* <a href="">Sign Up</a> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
