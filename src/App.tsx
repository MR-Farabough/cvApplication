import { Component } from 'react';
import './styles/App.css';

interface Props {
	fillerProp: string;
}

class App extends Component {
	constructor({ fillerProp }: Props) {
		super({ fillerProp });
	}

	render() {
		return <div>App</div>;
	}
}

export default App;
