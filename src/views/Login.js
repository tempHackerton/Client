import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import styles from "../styles/Login.module.css";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const outsideRef = useRef();
	// eslint-disable-next-line no-unused-vars
	const [_, setCookie] = useCookies(["token"]);
	const location = useLocation();
	const queryString = location.search;

	// url 쿼리파라미터 확인
	useEffect(() => {
		if (queryString === "?error=false") {
			alert(
				"일반 회원가입으로 이미 존재하는 계정입니다!\n일반 로그인으로 진행해주세요."
			);
			window.location.href = "/Login";
		}
	});

	// 엔터 클릭 시 로그인
	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			onClickLogin();
		}
	};

	// 이메일 값
	function onChangeEmail(e) {
		setEmail(e.target.value);
	}

	// 비밀번호 값
	function onChangePassword(e) {
		setPassword(e.target.value);
	}

	// 회원가입 눌렀을 시, 페이지 이동
	function handleSignupClick() {
		window.location.href = "/Signup";
	}

	// 이메일이랑 비밀번호 넘기고, 토큰 받기
	function onClickLogin() {
		if (email === "" || password === "") {
			alert("이메일 또는 비밀번호를 입력해주세요");
		} else {
			axios
				.post("https://backend.vivi-o.site/users/signin", {
					email: email,
					password: password,
				})
				.then((res) => {
					if (res.data.isSuccess) {
						const domain =
							window.location.hostname === "localhost"
								? "localhost"
								: "vivi-o.site";
						setCookie("token", res.data.result.token, { domain });
						window.location.href = "/";
					} else {
						alert("로그인이 실패. 이메일과 비밀번호를 확인해주세요");
					}
				});
		}
	}
  return (
    <div className={styles.Bigpage}>
		<div
			styles={{ width: window.screen.width, height: window.screen.height }}
			className={styles.page}
		>
			<div className={styles.titleWrap}>
				{/* 생생한 패션 생활, ViVio에서 시작하세요 */}
			</div>
			<div className={styles.inputWrap} style={{
                marginRight:"3vw"
            }}>
				<div className={styles.inputTitle}>
					<div>이메일</div>
					<input
						onKeyDown={handleKeyDown}
						onChange={(e) => {
							onChangeEmail(e);
						}}
						className={styles.textEP2}
						placeholder="abcd@email.com"
					/>
				</div>
			</div>
			<div className={styles.inputWrap} style={{
                marginRight:"4vw"
            }}>
				<div className={styles.inputTitle}>
					비밀번호
					<input
						onKeyDown={handleKeyDown}
		    			onChange={(e) => {
								onChangePassword(e);
						}}
						type="password"
						className={styles.textEP2}
						placeholder="비밀번호를 입력해주세요"
					/>
				</div>
			</div>
			<div>
				<button onClick={onClickLogin} className={styles.btnLogin}>
					로그인
				</button>
			</div>
			<div className={styles.bottomText2}>
				아직 회원이 아니신가요?
				<div onClick={handleSignupClick} className={styles.bottomfont}>
					회원가입
				</div>
			</div>
		</div>
		</div>
  )
}

export default Login
