import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const initialFormData = {
    name: "",
    email: "",
    phoneNumber: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Actualizar el estado del formulario sin realizar validaciones aún
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name.trim() === "" || formData.email.trim() === "") {
      setError('Los campos "name" y "email" son obligatorios');
      setSubmittedData(null);
    } else if (!isValidEmail(formData.email.trim())) {
      setError("El correo electrónico no es válido");
      setSubmittedData(null);
    } else if (formData.name.trim().length < 3) {
      setError('El campo "name" debe tener al menos 3 caracteres');
      setSubmittedData(null);
    } else if (formData.email.trim().length < 6) {
      setError('El campo "email" debe tener al menos 6 caracteres');
      setSubmittedData(null);
    } else {
      setError("");
      setSubmittedData({ ...formData });
      setFormData(initialFormData);
    }
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <>
      <h1 className="">Formulario de contacto</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-11/12 mx-auto mt-20"
      >
        <div className="flex justify-between items-center gap-2">
          <label htmlFor="name">Nombre y Apellido</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ingrese su nombre completo"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-100 border border-gray-300 rounded-md p-2 w-72 text-black"
          />
        </div>

        <div className="flex justify-between items-center gap-2">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Ingrese su correo electrónico"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-100 border border-gray-300 rounded-md p-2 w-72 text-black"
          />
        </div>

        <div className="flex justify-between items-center gap-2">
          <label htmlFor="phoneNumber">Número de Teléfono:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Ingrese su número de teléfono"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="bg-gray-100 border border-gray-300 rounded-md p-2 w-72 text-black"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Enviar
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      {submittedData && <Card data={submittedData} />}
    </>
  );
}

export default App;
