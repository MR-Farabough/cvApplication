import React from 'react';

interface Props {
	name: {
		firstName: string;
		lastName: string;
	};
	contact: {
		email: string;
		phone: string;
	};
}

class ContactInfo extends React.Component {
	constructor({ name, contact }: Props) {
		super(name, contact);
	}
	render() {
		return (
			<>
				<h3 className="header">Contact Info</h3>
				<div className="body-section">
					<div>
						<p>First Name</p>
						<input
							className="first-name"
							type="text"
							placeholder="First Name"
						/>
					</div>
					<div>
						<p>Last Name</p>
						<input className="last-name" type="text" placeholder="Last Name" />
					</div>
				</div>
				<div className="body-section">
					<div>
						<p>Email</p>
						<input className="email" type="text" placeholder="Email Address" />
					</div>
					<div>
						<p>Phone</p>
						<input
							className="phone-number"
							type="text"
							placeholder="Phone Number"
						/>
					</div>
				</div>
			</>
		);
	}
}

export default ContactInfo;
