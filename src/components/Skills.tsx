import { Component } from 'react';

export class Skills extends Component {
	state = {
		taskArray: [],
		renderTask: false,
	};
	formValidation() {
		const inputEl: HTMLInputElement | null =
			document.querySelector('.task-input');
		const newArray = [];
		this.state.taskArray.forEach((task) => {
			newArray.push(task);
		});
		if (inputEl && inputEl.value.length > 2) {
			inputEl.style.border = '1px solid green';
			newArray.push(inputEl.value);
			inputEl.value = '';
			this.setState({
				taskArray: newArray,
				renderTask: true,
			});
			return true;
		} else if (inputEl && inputEl.value.length < 2) {
			inputEl.style.border = '1px solid red';
			alert('Must be valid skill');
			return false;
		}
	}
	handleClick() {
		if (this.formValidation()) {
		}
	}
	handleDelete(key: string) {
		let text = document.querySelector(`.a${key}`)?.textContent;
		let count = 0;
		if (text) {
			let newText = '';
			while (count < text?.length - 1) {
				newText += text[count];
				count++;
			}
			const newState: string[] = [];
			this.state.taskArray.forEach((task) => {
				if (task != newText) {
					newState.push(task);
				}
			});
			this.setState({ taskArray: newState });
		}
	}
	render() {
		return (
			<>
				<h3 className="header">Skills</h3>
				<div>
					<button onClick={() => this.handleClick()}>Add Task</button>
				</div>
				<div className="body-section">
					<input
						type="text"
						className="task-input long-input"
						placeholder="Enter one skill at a time"
					/>
					{this.state.renderTask &&
						this.state.taskArray.map((task, index) => {
							return (
								<div className={`a${index}`} key={index}>
									<fieldset>
										{task}
										<button
											onClick={() => this.handleDelete(`${index}`)}
											className="delete-button"
										>
											&#10008;
										</button>
									</fieldset>
								</div>
							);
						})}
				</div>
			</>
		);
	}
}

export default Skills;
