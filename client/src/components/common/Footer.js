const Footer = () => {
	const link = "https://iapptechnologies.com";
	const target = "_blank";

	return (
		<div className="container">
			Copyright © <small>{new Date().getFullYear()}</small> Navdeep{" "}
			<a href={link} target={target}>
			iapptechnologies.com
			</a>
		</div>
	);
};

export default Footer;
