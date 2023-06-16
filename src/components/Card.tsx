import { Component, ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export class Card extends Component<Props> {
	render() {
		const { children } = this.props;
		return <div>{children}</div>;
	}
}

export default Card;
