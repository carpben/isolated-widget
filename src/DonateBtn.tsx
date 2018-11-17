import { Component, h } from 'preact';
// import styled from "preact-emotion"
import { bgColor, btnTxt, COLORS, hideBrandFromDonateBtn, url } from './consts';
import { css } from "./isolatedEmotion"


class DonateBtn extends Component {
	public render() {
		return (
			<a 
				class={Link}
				href={url}
				target="blank"
			>
				{btnTxt}<br/>
				{ !hideBrandFromDonateBtn && <span>via GivingWay</span> }
				{/* <SecureGW/> */}
      	</a>
		);
	}
}

const Link = css`
	background-color: ${bgColor}; 
	color: white;
	border-radius: 10px;  
	font-size: 20px; 
	font-weight: 700; 
	cursor: pointer; 
	display: flex; 
	flex-direction: column;
	align-items: center; 
	padding: 5px 10px; 
	text-align: center; 
	.donate {
		display: block; 
	}
	span {
		font-size: 11px; 
		color: ${COLORS.BLUE}
	}
`


export default DonateBtn;
