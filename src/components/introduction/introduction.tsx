import * as React from "react";
import { connect } from 'react-redux';
import { IRootState } from '../../store/reducer';
import { getName, getTitle } from './reducer';

export interface IIntroductionProps {
	name: string,
	title: string
}

export class Introduction extends React.Component<IIntroductionProps> {
	public render() {
		const { name, title } = this.props;
		return (

			<p>
				{name} <strong>{title}</strong>
			</p>
		);
	}
}

const mapStateToProps = (state: IRootState) => {
  return { 
		name: getName(state),
		title: getTitle(state)
	};
}

export default connect(mapStateToProps)(Introduction);
