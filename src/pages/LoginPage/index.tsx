import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../firebase-config.ts";
import { useDispatch } from "react-redux";
import { setMemberLogin } from "../../actions/memberActions.ts";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [exist, setExist] = useState(true);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      dispatch(setMemberLogin(email));
      setExist(true);
      navigate("/");
    } catch (error) {
      setExist(false);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    console.log(name, value);
    if (name === "form-email") {
      setEmail(value);
    } else if (name === "form-password") {
      setPassword(value);
    }
  };

  return (
    <div className="login__container">
      <h2>로그인</h2>
      <form className="login__form__container" onSubmit={onSubmit}>
        <input
          value={email}
          onChange={onChange}
          name="form-email"
          type="email"
          required
          placeholder="example@gmail.com"
        ></input>
        <input
          value={password}
          onChange={onChange}
          name="form-password"
          type="password"
          required
          placeholder="패스워드"
        ></input>
        <button type="submit">가입하기</button>
      </form>
      {!exist && <p className="login__error"> 존재하지 않는 회원입니다.</p>}
      <div className="login__noti">
        <p>계정이 없습니까?</p>
        <Link to="/join" className="login__noti__join">
          가입하기
        </Link>
      </div>
    </div>
  );
}
