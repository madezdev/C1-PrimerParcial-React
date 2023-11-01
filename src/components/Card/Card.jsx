

const Card = ( {data}) => {
  return (
    <div className="mt-20 flex flex-col gap-2 border-2 border-green-600 bg-slate-500 p-4 rounded-lg">
      <h2>Información de Contacto enviado ✅</h2>
      <p>Nombre: {data.name}</p>
      <p>Correo Electrónico: {data.email}</p>
      <p>Número de Teléfono: {data.phoneNumber}</p>
    </div>
  );
  
}

export default Card