import React from "react";
import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import styles from "../styles/header.module.css";

import mascot from "../mascot.png";
function header() {

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
					style={{ width :'auto', height: '11vh' }}
					src={mascot}
					alt="Yong bok"
				/>
			</div>
    </div>
  )
}

export default header

// const Menu = styled.div`
// 	background: rgba(202, 202, 202, 0.5);
// 	position: absolute;
// 	top: 100%;
// 	width: 200px;
// 	text-align: center;
// 	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
// 	border-radius: 10px;
// 	opacity: 0;
// 	visibility: hidden;
// 	transform: translateY(-20px);
// 	transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
// 	z-index: 9;

// 	font-family: "NanumSquareRoundOTF";
// 	font-style: normal;
// 	font-weight: 800;
// 	font-size: 20px;
// 	line-height: 140%;
// 	/* identical to box height, or 28px */
// 	letter-spacing: 0.02em;
// 	text-transform: capitalize;

// 	color: #ffffff;

// 	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

// 	&:after {
// 		content: "";
// 		height: 0;
// 		width: 0;
// 		position: absolute;
// 		top: -3px;
// 		transform: translateY(-50%);
// 		border: 12px solid transparent;
// 		border-top-width: 0;
// 		border-bottom-color: gray;
// 	}

// 	${({ isDropped }) =>
// 		isDropped &&
// 		css`
// 			opacity: 1;
// 			visibility: visible;
// 			transform: translateY(0);
// 		`};
// `;

// const Ul = styled.ul`
// 	& > li {
// 		margin-bottom: 10px;
// 	}

// 	& > li:first-of-type {
// 		margin-top: 10px;
// 	}

// 	list-style-type: none;
// 	padding: 0;
// 	margin: 0;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: space-between;
// 	align-items: center;
// `;

// const Li = styled.li``;

// const LinkWrapper = styled.a`
// 	font-size: 16px;
// 	text-decoration: none;
// 	color: white;
// `;