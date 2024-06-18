import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    messaggio: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logica di invio del modulo
  };

  return (
    <div id="contact" className="py-12 bg-seaBlue border border-seaBlue">
      <div className="container mx-auto px-6">
        <h2 className="font-cocktail text-4xl font-bold mb-8 text-center text-sand">Contatti</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700">Nome</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Messaggio</label>
            <textarea
              name="messaggio"
              value={formData.messaggio}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            ></textarea>
          </div>
          <button type="submit" className="w-full p-2 bg-seaBlue text-white rounded">Invia</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
