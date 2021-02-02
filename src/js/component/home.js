import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//Include navbar
import { Navbar } from "./navbar.js";

//Include Jumbotron
import { Jumbotron } from "./jumbotron.js";

//Include Cards
import { Cards } from "./card.js";

//include footer
import { Footer } from "./footer.js";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<Cards />
			<Footer />
		</div>
	);
}
