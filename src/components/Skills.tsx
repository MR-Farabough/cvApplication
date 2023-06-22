import { useState } from 'react';

interface State {
	taskArray: string[];
	renderTask: boolean;
}

export const Skills = () => {
	const preState: State = {
		taskArray: [],
		renderTask: false,
	};
	let [state, setState] = useState(preState);
	const formValidation = () => {
		const inputEl: HTMLInputElement | null =
			document.querySelector('.task-input');
		const newArray = [];
		state.taskArray.forEach((task) => {
			newArray.push(task);
		});
		if (inputEl && inputEl.value.length > 2) {
			inputEl.style.border = '1px solid green';
			newArray.push(inputEl.value);
			inputEl.value = '';
			const newState = {
				taskArray: newArray,
				renderTask: true,
			};
			setState(newState);
			return true;
		} else if (inputEl && inputEl.value.length < 2) {
			inputEl.style.border = '1px solid red';
			alert('Must be valid skill');
			return false;
		}
	};
	const handleClick = () => {
		if (formValidation()) {
		}
	};
	const handleDelete = (key: string) => {
		let text = document.querySelector(`.a${key}`)?.textContent;
		let count = 0;
		if (text) {
			let newText = '';
			while (count < text?.length - 1) {
				newText += text[count];
				count++;
			}
			const newState: string[] = [];
			state.taskArray.forEach((task) => {
				if (task != newText) {
					newState.push(task);
				}
			});
			const cacheState = {
				taskArray: newState,
				renderTask: state.renderTask,
			};
			setState(cacheState);
		}
	};
	return (
		<>
			<h3 className="header">Skills</h3>
			<div>
				<button onClick={() => handleClick()}>Add Task</button>
			</div>
			<div className="body-section">
				<input
					type="text"
					className="task-input long-input"
					placeholder="Enter one skill at a time"
				/>
				{state.renderTask &&
					state.taskArray.map((task, index) => {
						return (
							<div className={`a${index}`} key={index}>
								<fieldset>
									<div className="task">{task}</div>
									<button
										onClick={() => handleDelete(`${index}`)}
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
};

export default Skills;
