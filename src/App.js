import React from "react";
import Accordion from "./components/Accordion";



const items = [
	{ title: "What is React", content: "React is a front-end framework" },
	{ title: "Why use React?", content: "React is a favourite js library amongst engineers" },
	{ title: "How do you use React?", content: "You use react by creating Components" },
];

const App = () => {
	return (
		<div>
			<h1 className="text-2xl font-medium text-blue-500 text-center">React App for Accordion</h1>
			<div className="flex justify-center pt-10 w-full">
				<Accordion item = {items}/>
				</div>
		</div>
	);
};

export default App;
