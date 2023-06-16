import { Component, ReactNode } from 'react';
import '../styles/Card.css';

interface Props {
	children: ReactNode;
}

export class Card extends Component<Props> {
	render() {
		const { children } = this.props;
		return <div className="card-body">{children}</div>;
	}
}

export default Card;
