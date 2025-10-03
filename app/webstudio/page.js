"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const services = [
	{
		title: "Web Design",
		description: "Modern, responsive websites tailored for your brand. Fast, secure, and optimized for conversions.",
		icon: "/web/wd.png"
	},
	{
		title: "SEO Optimization",
		description: "On-page and technical SEO to rank higher on Google. Keyword research, content strategy, and site audits.",
		icon: "/web/seo.png"
	},
	{
		title: "Google My Business",
		description: "Local SEO setup and optimization to attract customers in your area. Maps, reviews, and profile management.",
		icon: "/web/googlebusiness.png"
	},
	{
		title: "E-Commerce Solutions",
		description: "Online stores with secure payments, product management, and SEO for sales growth.",
		icon: "/web/ec.png"
	}
];

const projects = [
	{
		name: "Wood Smart Home",
		image: "/web/hero-demo-1.jpg.webp",
		description: "Wood Smart Home with SEO-optimized landing pages and mobile-first design.",
		link: "#"
	},
	{
		name: "Electric Market",
		image: "/web/hero-demo-2.jpg.webp",
		description: "E-commerce platform with SEO-optimized product pages and fast checkout.",
		link: "#"
	},
	{
		name: "Nail Salon",
		image: "/web/nail.jpg",
		description: "Nail salon website with booking system and SEO optimization.",
		link: "#"
	},
    {
		name: "Nail Art Blog",
		image: "/web/nab.jpg",
		description: "Nail art blog with tutorials and SEO optimization.",
		link: "#"
	},
    {
        name: "Jewelry Store",
		image: "/web/jewelry.webp",
		description: "Jewelry store website with e-commerce functionality and SEO optimization.",
		link: "#"
    },
    {
        name: "Food Store",
		image: "/web/food.jpg",
		description: "Food store website with e-commerce functionality and SEO optimization.",
		link: "#"
    }
];

const reviews = [
	{
		name: "Sarah L.",
		company: "Green Food Inc.",
		text: "Our website looks amazing and ranks #1 for our main keywords. The team was fast, professional, and always available!"
	},
	{
		name: "Mike T.",
		company: "Parking Master",
		text: "We saw a 40% increase in traffic after the SEO overhaul. Highly recommend for any local business!"
	},
	{
		name: "Anna K.",
		company: "GPLX App",
		text: "The mobile app and website both perform great on Google. Excellent technical SEO and support!"
	}
];

const partners = [
	{ name: "AWS", logo: "/web/aws.png" },
	{ name: "Google", logo: "/web/google.png" },
	{ name: "SAIT", logo: "/web/sait.jpg" },
	{ name: "Node.js", logo: "/web/wp.png" }
];

export default function WebSeoStudio() {
	const [showAppointment, setShowAppointment] = useState(false);
	const [form, setForm] = useState({
		name: "",
		email: "",
		company: "",
		service: "",
		date: "",
		time: "",
		message: ""
	});

	const handleChange = e => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		alert("Thank you! We'll contact you soon to discuss your project.");
		setForm({ name: "", email: "", company: "", service: "", date: "", time: "", message: "" });
		setShowAppointment(false);
	};

	return (
		<main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
			{/* Hero Section */}
			<header className="py-12 px-4 text-center">
				<h1 className="text-4xl md:text-6xl font-bold mb-4">
					Web & SEO Studio <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Calgary</span>
				</h1>
				<p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-6">
					Grow your business with modern web design and Google SEO. Mobile-first, fast, and built for results.
				</p>
				<button
					className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
					onClick={() => setShowAppointment(true)}
				>
					Call (825) 288 0437
				</button>
			</header>

			{/* Services Section */}
			<section className="container mx-auto px-4 py-12">
				<h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
								{services.map((service, idx) => (
												<div
													key={idx}
													className="relative rounded-2xl border border-gray-800 text-center flex flex-col items-center justify-center min-h-[220px] overflow-hidden shadow-lg"
													style={{
														backgroundImage: `url(${service.icon})`,
														backgroundSize: 'cover',
														backgroundPosition: 'center',
														backgroundRepeat: 'no-repeat',
													}}
												>
													<div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm"></div>
													<div className="relative z-10 p-6 w-full">
														<h3 className="text-xl font-semibold mb-2 text-emerald-400 drop-shadow-lg">{service.title}</h3>
														<p className="text-gray-300 text-sm drop-shadow-lg">{service.description}</p>
													</div>
												</div>
								))}
				</div>
			</section>

			{/* Recent Projects Section */}
			<section className="container mx-auto px-4 py-12">
				<h2 className="text-3xl font-bold mb-8 text-center">Recent Projects</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{projects.map((project, idx) => (
						<div key={idx} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
							<Image src={project.image} alt={project.name + ' screenshot'} width={400} height={200} className="rounded-lg mb-4 w-full h-40 object-cover" />
							<h3 className="text-lg font-semibold text-blue-400 mb-2">{project.name}</h3>
							<p className="text-gray-300 text-sm mb-2">{project.description}</p>
							
						</div>
					))}
				</div>
			</section>

			{/* Customer Reviews Section */}
			<section className="container mx-auto px-4 py-12">
				<h2 className="text-3xl font-bold mb-8 text-center">Customer Reviews</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{reviews.map((review, idx) => (
						<div key={idx} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
							<div className="flex items-center gap-3 mb-2">
								<div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
									<svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
								<div>
									<h4 className="text-lg font-semibold text-white">{review.name}</h4>
									<p className="text-gray-400 text-sm">{review.company}</p>
								</div>
							</div>
							  <p className="text-gray-300 text-sm italic">&quot;{review.text}&quot;</p>
						</div>
					))}
				</div>
			</section>

			{/* Partner Logos Section */}
			<section className="container mx-auto px-4 py-12">
				<h2 className="text-3xl font-bold mb-8 text-center">Our Partners</h2>
				<div className="flex flex-wrap justify-center items-center gap-8">
					{partners.map((partner, idx) => (
						<div key={idx} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800 flex items-center">
							<Image src={partner.logo} alt={partner.name + ' logo'} width={80} height={40} className="object-contain" />
						</div>
					))}
				</div>
			</section>

			{/* Appointment Section (Modal) */}
			{showAppointment && (
				<div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
					<div className="bg-gray-900/95 rounded-2xl p-8 max-w-md w-full border border-gray-800 shadow-2xl">
						<h2 className="text-2xl font-bold text-white mb-6 text-center">Book an Appointment</h2>
						<form onSubmit={handleSubmit} className="space-y-4">
							<input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your Name" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
							<input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="Email Address" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
							<input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Company/Organization" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
							<select name="service" value={form.service} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
								<option value="">Select Service</option>
								{services.map((service, idx) => (
									<option key={idx} value={service.title}>{service.title}</option>
								))}
							</select>
							<input type="date" name="date" value={form.date} onChange={handleChange} required min={new Date().toISOString().split('T')[0]} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
							<input type="time" name="time" value={form.time} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
							<textarea name="message" value={form.message} onChange={handleChange} rows="3" placeholder="Tell us about your project..." className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none" />
							<div className="flex gap-4 mt-4">
								<button type="submit" className="flex-1 bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">Book Now</button>
								<button type="button" className="flex-1 bg-gray-700 text-white py-3 px-6 rounded-lg" onClick={() => setShowAppointment(false)}>Cancel</button>
							</div>
						</form>
					</div>
				</div>
			)}

			{/* Footer */}
			<footer className="py-8 text-center text-gray-400">
				<p>&copy; 2025 Web & SEO Studio Calgary. All rights reserved.</p>
			</footer>
		</main>
	);
}
