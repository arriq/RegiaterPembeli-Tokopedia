import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<div>
			<footer className="text-center" style={{marginTop: -70}}>
				<small style={{ color: "white", fontWeight: "bold" }}>
					2009-2020 © PT Tokopedia{" "}
					<Link className="text-white text-decoration-none" to="/bantuan">
						Bantuan
					</Link>
				</small>
			</footer>
		</div>
	);
}