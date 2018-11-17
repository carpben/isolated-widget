export const COLORS = {
	BLUE: "#162044", 
	GRAY: "#b0b0b0", 
	GREEN_BACKGROUND: "#00d8ae", 
	GREEN_TEXT: "#038c72", 
	// GRAYS: [...Array(15).keys()].map(
	// 	(_,i) => {
	// 		const brightness = 16*(1+i); 
	// 		return `rgb(${brightness}, ${brightness}, ${brightness})`;
	// 	}
	// ), 
	ORANGE: "#f76e69",

	VERY_LIGHT_GRAY: "#f8f8f8"
}
	
const gwDomain: string = "https://www.givingway.com/"

export enum MODE {
	DONATE = "donate", 
	VOLUNTEER_ABROAD = "vol-onsite" 
}
const BG_COLORS_NAMES = {
	GREEN: "gw-green", 
	ORANGE: "gw-orange"
}

interface IGwConfig {
	id:string, 
	bgColor:string, 
	mode:string, 
	hideBrand:boolean
}

// @ts-ignore
const {id:shortId, mode:configMode, bgColor:configBgColorName, hideBrand:hideBrandFromDonateBtn=false }:IGwConfig = window.gwConfig;

if (!shortId){
	throw Error;
}

export let mode:string

if (configMode) {
	if (!Object.values(MODE).includes(configMode)){
		throw Error; 
	} else {
		mode = configMode
	}
} else {
	mode = MODE.DONATE
}

export const bgColor = (configBgColorName===BG_COLORS_NAMES.ORANGE)? COLORS.ORANGE : COLORS.GREEN_BACKGROUND;

export {hideBrandFromDonateBtn}

export const url = `${gwDomain}${(mode === MODE.VOLUNTEER_ABROAD)? "organization/" : "donate/" }${shortId}?fromGWWidget=true`
export const btnTxt = (mode===MODE.VOLUNTEER_ABROAD)? "Volunteer" : "Donate" ; 
console.log(url)




