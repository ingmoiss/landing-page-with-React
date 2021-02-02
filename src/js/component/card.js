import React from "react";

export function Card() {
	return (
		<div className="card">
			<img
				className="card-img-top"
				src="https://assets.puzzlefactory.pl/puzzle/286/057/original.jpg"
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}

export function Cards() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-3">
					<Card />
				</div>
				<div className="col-md-3">
					<Card />
				</div>
				<div className="col-md-3">
					<Card />
				</div>
				<div className="col-md-3">
					<Card />
				</div>
			</div>
		</div>
	);
}
