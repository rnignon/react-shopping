import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import "./MyPage.css";

export default function MyPage() {
  const user = useSelector((state: RootState) => state.member);

  return (
    <div className="mypage__container">
      {user === null ? (
        <div className="mypage__info">
          <p>현재 로그인 상태가 아닙니다.</p>
          <a href="/login">로그인 하러가기</a>
        </div>
      ) : (
        <div className="mypage__info">
          <p>환영합니다,</p>
          <p className="mypage__user">{user}</p>
          <p>님!</p>
        </div>
      )}
    </div>
  );
}
