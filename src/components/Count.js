// building a count button using react hooks

import React, { useState } from "react";

import {
	PlusOutlined,
	MinusOutlined,
} from "@ant-design/icons";

const Count = () => {
	const [onAdd, setonAdd] = useState(0);

	const add = (onAdd) => {
		setonAdd(onAdd + 1);
	};

	const minus = (onAdd) => {
		setonAdd(onAdd - 1);
	};

    const show= onAdd < 0 ? "limit reached" : onAdd

	return (
		<div className='flex justify-center'>
			<div
				className='bg-red-500 border text-white w-10 flex justify-center items-center py-2 rounded hover:bg-red-700'
				onClick={() => minus(onAdd)}
			>
				<MinusOutlined />
			</div>
			<div className="px-3">
				<h1 className='text-xl text-blue-500 text-center font-medium'>
					count: {show}
				</h1>
			</div>
			<div
				className='bg-blue-500 border text-white w-10 flex justify-center items-center py-2 rounded hover:bg-blue-700'
				onClick={() => add(onAdd)}
			>
				<PlusOutlined />
			</div>
		</div>
	);
};

export default Count;
