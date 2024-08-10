import * as React from "react";
import { useState, useEffect } from "react";

type InicialFormType = {
	id: number | null;
	name: string;
	constellation: string;
};

let inicialForm: InicialFormType = {
	id: null,
	name: "",
	constellation: "",
};

type CrudFormProps = {
	createData: (data: InicialFormType) => void;
	updateData: (data: InicialFormType) => void;
	dataToEdit: InicialFormType | null;
	setDataToEdit: (data: InicialFormType | null) => void;
};

export const CrudForm: React.FC<CrudFormProps> = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
	const [form, setForm] = useState<InicialFormType>(inicialForm);

	useEffect(() => {
		if (dataToEdit) {
			setForm(dataToEdit);
		} else {
			setForm(inicialForm);
		}
	}, [dataToEdit]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!form.name || !form.constellation) {
			alert("Datos incompletos");
			return;
		}

		if (form.id === null) {
			createData(form);
		} else {
			updateData(form);
		}
		handleReset();
	};

	const handleReset = () => {
		setForm(inicialForm);
		setDataToEdit(null);
	};

	return (
		<div>
			<h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
			<form onSubmit={handleSubmit}>
				<input type="text" name="name" placeholder="Nombre" onChange={handleChange} value={form.name} />
				<input
					type="text"
					name="constellation"
					placeholder="Constelación"
					onChange={handleChange}
					value={form.constellation}
				/>
				<input type="submit" value="Enviar" />
				<input type="reset" value="Limpiar" onClick={handleReset} />
			</form>
		</div>
	);
};
