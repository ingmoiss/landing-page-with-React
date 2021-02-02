import React from "react";

export function Jumbotron() {
	return (
		<div className="container mt-4 rounded">
			<div className="jumbotron">
				<h1 className="display-4">Hello, world!</h1>
				<p className="lead">
					This is a simple hero unit, a simple jumbotron-style
					component for calling extra attention to featured content or
					information. Lorem ipsum dolor sit amet, consectetur
					adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua.
				</p>
				<p className="lead">
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Learn more
					</a>
				</p>
			</div>
		</div>
	);
}
