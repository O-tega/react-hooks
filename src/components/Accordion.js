import React, { useState } from "react";
import { CaretDownOutlined } from "@ant-design/icons";


const Accordion = ({ item }) => {
	const [activeIndex, setActiveIndex] =
		useState(null);

	const clicked = (index) => {
		setActiveIndex(index);
	};

	const renderItems = item.map(
		(items, index) => {
			const display =
				index === activeIndex
					? ""
					: "hidden";
			const rotate =
				index === activeIndex
					? ""
					: -90;
			return (
				<div
					key={index}
					className='border transition-all duration-700'
					onClick={() => clicked(index)}
				>
					<div className='p-3 '>
						<div>
							<h1 className='font-medium text-blue-500'>
								<span>
									{" "}
									<CaretDownOutlined
										rotate={rotate}
									/>{" "}
								</span>
								{items.title}
							</h1>
						</div>
						<div
							className={`${display} `}
						>
							<p className='pl-5 pt-5'>
								{items.content}
							</p>
						</div>
					</div>
				</div>
			);
		}
	);
	return (
		<div className='w-9/12'>
			{renderItems}
		</div>
	);
};

export default Accordion;
