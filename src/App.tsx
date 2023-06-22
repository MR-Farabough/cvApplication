import { useState } from 'react';
import './styles/App.css';
import ContactInfo from './components/ContactInfo';
import Card from './components/Card';
import Education from './components/Education';
import Skills from './components/Skills';
import Work from './components/Work';

const App = () => {
	let [state, setState] = useState({
		renderReady: false,
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		university: '',
		major: '',
		accomplishments: '',
		skills: '',
		company: '',
		titles: '',
		responsibilities: '',
		dates: '',
	});

	const handleSubmit = () => {
		const firstName: HTMLInputElement | null =
			document.querySelector('.first-name');
		const lastName: HTMLInputElement | null =
			document.querySelector('.last-name');
		const email: HTMLInputElement | null = document.querySelector('.email');
		const phone: HTMLInputElement | null =
			document.querySelector('.phone-number');
		const university: HTMLInputElement | null =
			document.querySelector('.university');
		const major: HTMLInputElement | null = document.querySelector('.major');
		const accomplishments: HTMLInputElement | null =
			document.querySelector('.accomplishments');
		const skills: NodeList | null = document.querySelectorAll('.task');
		const company: NodeList = document.querySelectorAll('.work-title');
		const titles: NodeList = document.querySelectorAll('.work-position');
		const responsibilities: NodeList = document.querySelectorAll('.work-tasks');
		const dates: NodeList = document.querySelectorAll('.work-dates');
		const skillsArr: string[] = [];
		skills.forEach((skill) => {
			const skillText = skill.textContent + ' ' || '';
			skillsArr.push(skillText);
		});
		const companyArr: string[] = [];
		company.forEach((companyName) => {
			const companyText = companyName.textContent + ' ' || '';
			companyArr.push(companyText);
		});
		const titleArr: string[] = [];
		titles.forEach((title) => {
			const titleText = title.textContent + ' ' || '';
			titleArr.push(titleText);
		});
		const responsibilitiesArr: string[] = [];
		responsibilities.forEach((task) => {
			const taskText = task.textContent + ' ' || '';
			responsibilitiesArr.push(taskText);
		});
		const datesArr: string[] = [];
		dates.forEach((date) => {
			const dateText = date.textContent + ' ' || '';
			datesArr.push(dateText);
		});
		const newState = {
			renderReady: true,
			firstName: (firstName && firstName.value) || state.firstName,
			lastName: (lastName && lastName.value) || state.lastName,
			email: (email && email.value) || state.email,
			phone: (phone && phone.value) || state.phone,
			university: (university && university.value) || state.university,
			major: (major && major.value) || state.major,
			accomplishments:
				(accomplishments && accomplishments.value) || state.accomplishments,
			skills: skillsArr.join(' ') || state.skills,
			company: companyArr.join(' ') || state.company,
			titles: titleArr.join(' ') || state.titles,
			responsibilities: responsibilitiesArr.join(' ') || state.responsibilities,
			dates: datesArr.join(' ') || state.dates,
		};
		setState(newState);
	};
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
				<button onClick={handleSubmit} className="submit-button">
					Submit
				</button>
			</Card>
			{state.renderReady && (
				<Card color="six">
					<div className="container">
						<div className="Name">
							{state.firstName} {state.lastName}
						</div>
						<div className="Contact">
							<div>
								<h3>Email </h3>
								<p>{state.email}</p>
							</div>
							<div>
								<h3>Phone </h3>
								<p>{state.phone}</p>
							</div>
						</div>
						<div className="Education">
							<div>
								<h3>University </h3>
								<p>{state.university}</p>
							</div>
							<div>
								<h3>Major </h3>
								<p>{state.major}</p>
							</div>
							<div>
								<h3>Accomplishments </h3>
								<p> {state.accomplishments}</p>
							</div>
						</div>
						<div className="Skills">
							<h3>Skills &gt; </h3>
							<p>{state.skills}</p>
						</div>
						<div className="Work">
							<div>
								<h3>Company </h3>
								<p>{state.company}</p>
							</div>
							<div>
								<h3>Job Title </h3>
								<p>{state.titles}</p>
							</div>
							<div>
								<h3>Responsibilities </h3>
								<p>{state.responsibilities}</p>
							</div>
							<div>
								<h3>Time of Employment </h3>
								<p>{state.dates}</p>
							</div>
						</div>
					</div>
				</Card>
			)}
		</>
	);
};

export default App;
