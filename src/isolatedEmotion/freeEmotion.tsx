import createEmotion from 'create-emotion'
import { Component, h } from 'preact';
// @ts-ignore
import extraScopePlugin from 'stylis-plugin-extra-scope'

const emotion = createEmotion({}, { stylisPlugins: [extraScopePlugin('#break-36 #free-83')] })
const { css } = emotion

const appW = css`
		all: initial;
		* {
			all: unset;
		} 
`

export class BreakFree extends Component <any>{
	public render() {
		return (
			<div id="break-36">
				<div id="free-83">
	 				<div class={appW}>
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
}