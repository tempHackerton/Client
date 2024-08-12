import React from "react";
import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import styles from "../styles/Header.module.css";
import UseDetectClose from "../hooks/useDetectClose";
import { useCookies } from "react-cookie";

import mascot from "../mascot.png";
function Header() {
	const [LogoutIsOpen, LogoutRef, LogoutHandler] = UseDetectClose(false);
    const [boardIsOpen, boardRef, boardHandler] = UseDetectClose(false);
	// const [cookies, setCookie, removeCookie] = useCookies([
	// 	"token",
	// 	"socialToken",
	// ]);
	const [isuser, setIsuser] = useState(false);

	function handleHomeClick() {
		window.location.href = "/";
	}

	// 페이지가 처음 로드될 때만 토큰을 설정하도록 수정
	// useEffect(() => {
	// 	const storedSocialToken = cookies.socialToken;
	// 	if (storedSocialToken && !cookies.token) {
	// 		setCookie("token", storedSocialToken, {
	// 			path: "/",
	// 			domain: "www.vivi-o.site",
	// 		});
	// 		console.log("설정 후 토큰 쿠키:", cookies.token);
	// 	}
	// }, []);

	// 토큰 상태를 체크하여 사용자 상태 업데이트
	// useEffect(() => {
	// 	if (
	// 		!cookies.token ||
	// 		cookies.token === undefined ||
	// 		cookies.token === "undefined"
	// 	) {
	// 		setIsuser(false);
	// 	} else {
	// 		setIsuser(true);
	// 	}
	// }, [cookies.token]);

	// 로그아웃 함수
	function handleLogoutClick() {
		// window.location.href = "/";
		// if (cookies.socialToken) {
		// 	removeCookie("socialToken", { path: "/", domain: "vivi-o.site" });
		// 	removeCookie("token", { path: "/", domain: "www.vivi-o.site" });
		// } else {
		// 	removeCookie("token", { path: "/", domain: "vivi-o.site" });
		// }
		// // 쿠키에서 토큰을 제거하고 사용자 상태를 업데이트합니다.
	}

	function handleGuideClick() {
	}

	function handleLoginClick() {
	}
	function handleMypageClick() {
	}
	function handleCraft1Click() {
	}
	function handleCraft2Click() {
	}
	function handleCraft3Click() {
	}
	function handleCraft4Click() {
	}

  return (
    <div
		style={{
			borderTop: 0,
			borderLeft: 0,
			borderRight: 0,
			borderBottom: 2,
			borderStyle: "solid",
			borderColor: "black",
		}}
		className={styles.headercontainer}
	>
		<div className={styles.logoleft}>
			<img
				onClick={handleHomeClick}
				style={{ width :'auto', height: '11vh' }}
				src={mascot}
				alt="Yong bok"
			/>
		</div>
        <div className={styles.navelement} style={{ color: "#f1f1f1" }}>
			<div onClick={handleHomeClick}>
				<p>홈</p>
			</div>
			<div onClick={boardHandler} ref={boardRef}>
				<p>서비스</p>
				<Menu isDropped={boardIsOpen}>
					<Ul>
						<Li>
							<LinkWrapper onClick={handleCraft1Click}>
								숨겨진 복지 찾기
							</LinkWrapper>
						</Li>
					</Ul>
				</Menu>
			</div>
			<div onClick={LogoutHandler} ref={LogoutRef}>
				<p>AI 지원</p>
				<Menu isDropped={LogoutIsOpen}>
					<Ul>
						<Li>
							<LinkWrapper onClick={handleLogoutClick}>
								자기소개서 첨삭
							</LinkWrapper>
						</Li>
						<Li>
							<LinkWrapper onClick={handleLogoutClick}>
								AI 면접관
							</LinkWrapper>
						</Li>
					</Ul>
				</Menu>
			</div>
		</div>
    </div>
  )
}

export default Header

const Menu = styled.div`
	background: #A8D9BE;
	position: absolute;
	top: 100%;
	width: 250px;
	text-align: center;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
	border-radius: 20px;
	opacity: 0;
	visibility: hidden;
	transform: translateY(-20px);
	transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
	z-index: 9;

	font-family: "NanumSquareRoundOTF";
	font-style: normal;
	font-weight: 800;
	font-size: 22px;
	line-height: 140%;
	/* identical to box height, or 28px */
	letter-spacing: 0.02em;
	text-transform: capitalize;

	color: #ffffff;

	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

	&:after {
		content: "";
		height: 0;
		width: 0;
		position: absolute;
		top: -3px;
		transform: translateY(-50%);
		border: 20px solid transparent;
		border-top-width: 0;
		border-bottom-color: #A8D9BE;
	}

	${({ isDropped }) =>
		isDropped &&
		css`
			opacity: 1;
			visibility: visible;
			transform: translateY(0);
		`};
`;

const Ul = styled.ul`
	& > li {
		margin-bottom: 10px;
	}

	& > li:first-of-type {
		margin-top: 10px;
	}

	list-style-type: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const Li = styled.li``;

const LinkWrapper = styled.a`
	font-size: 22px;
	text-decoration: none;
	color: white;
`;