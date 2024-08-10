import React from "react";
import { CrudTableRow } from "./CrudTableRow";

type DataType = {
	id: number | null;
	name: string;
	constellation: string;
};

type CrudTableProps = {
	data: {
		id: number | null;
		name: string;
		constellation: string;
	}[];
	// setDataToEdit: DataType;
	setDataToEdit: (data: DataType | null) => void;
	deleteData: (id: number) => void;
};

const CrudTable: React.FC<CrudTableProps> = ({ data, setDataToEdit, deleteData }) => {
	return (
		<div>
			<h3>Tabla de datos</h3>
			<table>
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Constelación</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{data.length === 0 ? (
						<tr>
							<td colSpan={3}>Sin datos...</td>
						</tr>
					) : (
						data.map((el) => (
							<CrudTableRow key={el.id} el={el} setDataToEdit={setDataToEdit} deleteData={deleteData} />
						))
					)}
				</tbody>
			</table>
		</div>
	);
};

export default CrudTable;
