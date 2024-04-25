import React from 'react';

const Degrees = () => {
	return (
		<div id="degrees" className="degrees-container">
			<h1 className="degrees-h">My degree</h1>
			<div className="degree-box">
				<h3 className="degree-title">Applied Information Technology (future plan)</h3>
				<div className="whereWhen-box">
					<p className="degree-where">University of Lodz, WFiIS</p>
					<p className="degree-when">approx. 10.2024-07.2026</p>
				</div>
				<p className="degree-description">
					This October I am beginning the journey of studing Applied IT. I believe this will expand my understanding of
					Information Technology in generall and contibute toward my goal of becoming a Full Stack Developer.
				</p>
			</div>
			<div className="degree-box">
				<h3 className="degree-title">Architecture</h3>
				<div className="whereWhen-box">
					<p className="degree-where">Lodz University of Technology, WBAIŚ</p>
					<p className="degree-when">09.2016-07.2020</p>
				</div>
				<p className="degree-description">
					Studying architecture equipped to have a designer&apos;s perception of the world. The ability to use color,
					shape and form to design a space which is not only habitable but also enjoyable was a challenge that
					constantly developed me throughout my years of studying. Although I am no longer an architecture student the
					hard-working spirit and the designer's outlook on life have become my second nature.
				</p>
				<div className="degree-skills">
					<span className="degree-skill">AutoCAD</span>
					<span className="degree-skill">Revit</span>
					<span className="degree-skill">SketchUp</span>
					<span className="degree-skill">Affinity Photo</span>
					<span className="degree-skill">Public speaking</span>
					<span className="degree-skill">Project presentation</span>
				</div>
			</div>
		</div>
	);
};

export default Degrees;
