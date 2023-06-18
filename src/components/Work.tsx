import { Component } from 'react';
import '../styles/Work.css';

export class Work extends Component {
	state = {
		count: 0,
		renderReady: false,
		work: [],
	};
	handleOpen = () => {
		const modal = document.querySelector('.modal-deactive');
		modal?.classList.remove('modal-deactive');
		modal?.classList.add('modal-active');
	};
	handleClose = () => {
		const modal = document.querySelector('.modal-active');
		modal?.classList.remove('modal-active');
		modal?.classList.add('modal-deactive');
	};
	handleSubmit = () => {
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
				(company.style.border = '1px solid green'),
					(job.style.border = '1px solid green'),
					(responsibilies.style.border = '1px solid green'),
					(startDate.style.border = '1px solid green'),
					(endDate.style.border = '1px solid green');
				const newJobArray = [];
				this.state.work.forEach((prevJob) => {
					newJobArray.push(prevJob);
				});
				newJobArray.push({
					companyName: company.value,
					jobTitle: job.value,
					responsibilies: responsibilies.value,
					startDate: startDate.value,
					endDate: endDate.value,
				});
				this.setState({
					count: this.state.count + 1,
					renderReady: true,
					work: newJobArray,
				});
				this.handleClose();
				company.value = '';
				job.value = '';
				responsibilies.value = '';
				console.log(this.state);
			} else
				[
					(company.style.border = '1px solid red'),
					(job.style.border = '1px solid red'),
					(responsibilies.style.border = '1px solid red'),
					(startDate.style.border = '1px solid red'),
					(endDate.style.border = '1px solid red'),
				];
		}
	};
	render() {
		return (
			<>
				<div className="backdrop"></div>
				<h3 className="header">Work</h3>
				<div>
					<button onClick={this.handleOpen}>Add Work Expierence</button>
				</div>
				<div className="body-section">
					<div className="modal modal-deactive">
						<button onClick={this.handleClose}>&#10008;</button>
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
							<input
								type="text"
								placeholder="Job Title"
								className="job-input"
							/>
						</div>
						<div>
							<h3>Resonsibilities</h3>
							<input
								type="text"
								placeholder="Seperate with a ' , '"
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
						<button onClick={this.handleSubmit}>Submit</button>
					</div>
					{this.state.renderReady && (
						<div>
							<div>{JSON.stringify(this.state.work)}</div>
							<div>{JSON.stringify(this.state.work)}</div>
							<div>{JSON.stringify(this.state.work)}</div>
						</div>
					)}
				</div>
			</>
		);
	}
}

export default Work;
