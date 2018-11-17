import { Component, h } from 'preact'
import DonateBtn from "./DonateBtn"
import { css, IsolatedApp, keyframes } from "./isolatedEmotion"

class App extends Component {
	public render() {
		return (
			<IsolatedApp>
				<div class={Box}>
					<DonateBtn/>
				</div>
			</IsolatedApp>	
		)
	}
}

const move = keyframes`
  0% {
	 bottom: -50px;
  }
  50% {
	  bottom: 35px; 
  }
      
`

const Box = css`
	position: fixed; 
	bottom: 15px; 
	right: 15px; 
	z-index: 9999999999999!important;
	font-family: Arial, Helvetica, sans-serif;
	animation: ${move} 0.3s ease-in-out 2s; 
	animation-fill-mode: both;
`

export default App;
