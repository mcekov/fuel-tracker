import React from "react";

const GasNews = () => {
	return (
		<>
			<h3>Fuel Price News</h3>
			<ul id="list" className="list">
				<li className="minus">
					Cash <span>-$400</span>
					<button className="delete-btn">&times;</button>
				</li>
			</ul>
		</>
	);
};

export default GasNews;
