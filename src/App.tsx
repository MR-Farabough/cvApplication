import { Component } from 'react';
import './styles/App.css';
import ContactInfo from './components/ContactInfo';
import Card from './components/Card';
import Education from './components/Education';

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
				<Card color="one">
					<ContactInfo />
				</Card>
				<Card color="two">
					<Education />
				</Card>
			</>
		);
	}
}

export default App;
