import { useState } from 'react';

export const Education = () => {
	const example = {
		school: {
			university: '',
			major: '',
		},
		acomplishments: '',
	};
	const [state, setState] = useState(example);
	function handleModal() {
		const newState = {
			school: {
				university: 'New String',
				major: 'New String',
			},
			acomplishments: '',
		};
		setState(newState);
		const div: Element | null = document.querySelector('.deactive');
		if (div) {
			document.querySelector('.edu-btn')?.remove();
			div.classList.remove('deactive');
			div.classList.add('active');
		}
	}
	return (
		<>
			<h3 className="header">Education</h3>
			<button onClick={handleModal} className="edu-btn">
				Add Education
			</button>
			<div>{state.acomplishments}</div>
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
};

export default Education;
