import createEmotion from 'create-emotion'
import { Component, h } from 'preact';
// @ts-ignore
import extraScopePlugin from 'stylis-plugin-extra-scope'
import { BreakFree } from './freeEmotion';

const emotion = createEmotion({}, { stylisPlugins: [extraScopePlugin('#break-36 #free-83 #isolated-w-85')] })
const { css, cx, injectGlobal, keyframes } = emotion
export { css, cx, injectGlobal, keyframes }

export class IsolatedApp extends Component <any> {
	public render() {
		return (
			<BreakFree>
				<div id="isolated-w-85">
					{this.props.children}
				</div>
			</BreakFree>
		)
	}
}