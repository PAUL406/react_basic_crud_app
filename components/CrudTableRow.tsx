import React from "react";

type DataType = {
	id: number | null;
	name: string;
	constellation: string;
};

type elPropsType = {
	el: { id: number | null; name: string; constellation: string };
	setDataToEdit: (data: DataType | null) => void;
	deleteData: (id: number) => void;
};

export const CrudTableRow: React.FC<elPropsType> = ({ el, setDataToEdit, deleteData }) => {
	let { name, constellation, id } = el;
	return (
		<tr>
			<td>{el.name}</td>
			<td>{el.constellation}</td>
			<td>
				<button onClick={() => setDataToEdit(el)}>Editar</button>
				<button
					onClick={() => {
						if (id !== null) deleteData(id);
					}}
				>
					Eliminar
				</button>
			</td>
		</tr>
	);
};
