import { Component, ReactNode } from 'react';
import '../styles/Card.css';

interface Props {
	children: ReactNode;
	color: string;
}

export class Card extends Component<Props> {
	render() {
		const { children, color } = this.props;
		return <div className={'card-body' + ' ' + color}>{children}</div>;
	}
}

export default Card;
