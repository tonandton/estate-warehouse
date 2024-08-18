import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;

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
        {user ? (
          <div className="user">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5EQY2tgjBIOIrmxMqKY9eYGeik2dz34zdQ&s"
              alt=""
            />
            <span>John Doe</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">เข้าสู่ระบบ</a>
          </>
        )}
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
