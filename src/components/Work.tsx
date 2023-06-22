import { useState } from 'react';
import '../styles/Work.css';

type WorkExperience = {
	companyName: string;
	jobTitle: string;
	responsibilities: string;
	startDate: string;
	endDate: string;
};

interface State {
	count: number;
	renderReady: boolean;
	work: WorkExperience[];
}

export const Work = () => {
	const preState: State = {
		count: 0,
		renderReady: false,
		work: [],
	};
	let [state, setState] = useState(preState);
	const handleOpen = () => {
		const modal = document.querySelector('.modal-deactive');
		modal?.classList.remove('modal-deactive');
		modal?.classList.add('modal-active');
	};
	const handleClose = () => {
		const modal = document.querySelector('.modal-active');
		modal?.classList.remove('modal-active');
		modal?.classList.add('modal-deactive');
	};
	const handleSubmit = () => {
		const company: HTMLInputElement | null =
			document.querySelector('.company-input');
		const job: HTMLInputElement | null = document.querySelector('.job-input');
		const responsibilies: HTMLInputElement | null = document.querySelector(
			'.responsibilites-input'
		);
		const startDate: HTMLInputElement | null =
			document.querySelector('.start-date-input');
		const endDate: HTMLInputElement | null =
			document.querySelector('.end-date-input');
		if (company && job && responsibilies && startDate && endDate) {
			if (
				company.value.length > 3 &&
				job.value.length > 3 &&
				responsibilies.value.length > 3 &&
				startDate.value.length > 5 &&
				endDate.value.length > 5
			) {
				company.style.border = '1px solid green';
				job.style.border = '1px solid green';
				responsibilies.style.border = '1px solid green';
				startDate.style.border = '1px solid green';
				endDate.style.border = '1px solid green';

				const newJobArray: WorkExperience[] = [...state.work];
				newJobArray.push({
					companyName: company.value,
					jobTitle: job.value,
					responsibilities: responsibilies.value,
					startDate: startDate.value,
					endDate: endDate.value,
				});
				const newState = {
					count: state.count + 1,
					renderReady: true,
					work: newJobArray,
				};
				setState(newState);
				handleClose();
				company.value = '';
				job.value = '';
				responsibilies.value = '';
				console.log(state);
			} else {
				company.style.border = '1px solid red';
				job.style.border = '1px solid red';
				responsibilies.style.border = '1px solid red';
				startDate.style.border = '1px solid red';
				endDate.style.border = '1px solid red';
			}
		}
	};
	const handleDelete = (index: number) => {
		const newWorkArray: WorkExperience[] = [...state.work];
		newWorkArray.splice(index, 1);
		const newState = {
			count: state.count,
			renderReady: state.renderReady,
			work: newWorkArray,
		};
		setState(newState);
	};
	const handleWorkExperience = () => {
		return state.work.map((prevJob: WorkExperience, index: number) => (
			<div className="work-card" key={index}>
				<h2 className="work-title">{prevJob.companyName}</h2>
				<h3 className="work-position">{prevJob.jobTitle}</h3>
				<div className="work-tasks">{prevJob.responsibilities}</div>
				<h4 className="work-dates">
					Start - {prevJob.startDate} || End - {prevJob.endDate}
				</h4>
				<button onClick={() => handleDelete(index)}>Delete</button>
			</div>
		));
	};
	return (
		<>
			<div className="backdrop"></div>
			<h3 className="header">Work</h3>
			<div>
				<button onClick={handleOpen}>Add Work Experience</button>
			</div>
			<div className="body-section">
				<div className="modal modal-deactive">
					<button onClick={handleClose}>&#10008;</button>
					<div>
						<h3>Company Name</h3>
						<input
							type="text"
							placeholder="Company Name"
							className="company-input"
						/>
					</div>
					<div>
						<h3>Job Title</h3>
						<input type="text" placeholder="Job Title" className="job-input" />
					</div>
					<div>
						<h3>Responsibilities</h3>
						<input
							type="text"
							placeholder="Separate with a comma"
							className="responsibilites-input"
						/>
					</div>
					<div>
						<h3>Length of Employment</h3>
						<div className="date-input">
							<div>
								<h5>Start</h5>
								<input className="start-date-input" type="date" />
							</div>
							<div>
								<h5>End</h5>
								<input className="end-date-input" type="date" />
							</div>
						</div>
					</div>
					<button onClick={handleSubmit}>Submit</button>
				</div>
				{state.renderReady && handleWorkExperience()}
			</div>
		</>
	);
};

export default Work;
