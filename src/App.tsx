import { Component } from 'react';
import './styles/App.css';
import ContactInfo from './components/ContactInfo';
import Card from './components/Card';
import Education from './components/Education';
import Skills from './components/Skills';
import Work from './components/Work';

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
				<Card color="three">
					<Skills />
				</Card>
				<Card color="four">
					<Work />
				</Card>
				<Card color="five">
					<button className="submit-button">Submit</button>
				</Card>
			</>
		);
	}
}

export default App;
