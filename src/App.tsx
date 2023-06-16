import { Component } from 'react';
import './styles/App.css';
import ContactInfo from './components/ContactInfo';
import Card from './components/Card';

interface Props {
	fillerProp: string;
}

class App extends Component {
	constructor({ fillerProp }: Props) {
		super(fillerProp);
	}

	render() {
		return (
			<>
				<Card>
					<ContactInfo />
				</Card>
			</>
		);
	}
}

export default App;
