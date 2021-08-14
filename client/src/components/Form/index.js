import React from "react";

const Form = () => {
	return (
		<div className="container">
			<br></br>
			<br></br>
			<div className="row">
				<label htmlFor="name" />
				<input name="name" placeholder="name" />
			</div>
			<div className="row">
				<label htmlFor="title" />
				<input name="title" placeholder="title" />
			</div>

			<div className="row">
				<div className="col s6">
					<label htmlFor="phone">Phone</label>
					<input name="phone" placeholder="Enter Phone Number" />
				</div>
				<div className="col s6">
					<label htmlFor="email">Email</label>
					<input name="email" placeholder="email" />
				</div>
			</div>

			<input type="submit" className="btn" />
		</div>
	);
};

export default Form;
