"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { CrudForm } from "./CrudForm";
import CrudTable from "./CrudTable";

type initialDbType = {
	id: number | null;
	name: string;
	constellation: string;
}[];

type DataType = {
	id: number | null;
	name: string;
	constellation: string;
};

const initialDb = [
	{
		id: 1,
		name: "Seiya",
		constellation: "Pegaso",
	},
	{
		id: 2,
		name: "Shiryu",
		constellation: "Dragón",
	},
	{
		id: 3,
		name: "Hyoga",
		constellation: "Cisne",
	},
	{
		id: 4,
		name: "Shun",
		constellation: "Andrómeda",
	},
	{
		id: 5,
		name: "Ikki",
		constellation: "Fénix",
	},
];

export const CrudApp = () => {
	const [db, setDb] = useState<initialDbType>(initialDb);
	const [dataToEdit, setDataToEdit] = useState<DataType | null>(null);

	const createData = (data: DataType) => {
		if (data.id === null) data.id = Date.now();
		//     const newData = {
		//     ...data,
		//     id: data.id ?? Date.now(), // Asegura que `id` sea `number`
		// };
		setDb([...db, data]);
	};
	const updateData = (data: DataType) => {
		let newData = db.map((el) => (el.id === data.id ? data : el));
		setDb(newData);
	};
	const deleteData = (id: number) => {
		let isDalete = window.confirm(`¿Estas seguro de que quieres eliminar con el id '${id}' ?`);
		if (isDalete) {
			let newData = db.filter((el) => el.id !== id);
			setDb(newData);
		} else {
			return;
		}
	};

	return (
		<div>
			<h2>Crud APP</h2>
			<article className="grid-1-2">
				<CrudForm
					createData={createData}
					updateData={updateData}
					dataToEdit={dataToEdit}
					setDataToEdit={setDataToEdit}
				/>
				<CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />
			</article>
		</div>
	);
};
