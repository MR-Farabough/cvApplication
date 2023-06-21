import { Component } from 'react';

export class Education extends Component {
	state = {
		school: {
			university: '',
			major: '',
		},
		acomplishments: '',
	};
	handleModal() {
		this.setState({
			school: {
				university: 'New String',
				major: 'New String',
			},
			acomplishments: '',
		});
		const div: Element | null = document.querySelector('.deactive');
		if (div) {
			document.querySelector('.edu-btn')?.remove();
			div.classList.remove('deactive');
			div.classList.add('active');
		}
	}

	render() {
		return (
			<>
				<h3 className="header">Education</h3>
				<button onClick={() => this.handleModal()} className="edu-btn">
					Add Education
				</button>
				<div>{this.state.acomplishments}</div>
				<div className={'body-section deactive'}>
					<div>
						<p>University Name</p>
						<input
							className="university"
							type="text"
							placeholder="University Name"
						/>
					</div>
					<div>
						<p>Major</p>
						<input className="major" type="text" placeholder="Major" />
					</div>
					<div>
						<p>Accomplishments</p>
						<input
							type="text"
							className="accomplishments long-input"
							placeholder="Seperate using a ' , '"
						/>
					</div>
				</div>
			</>
		);
	}
}

export default Education;
