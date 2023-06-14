import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    const encodedName = encodeURIComponent(formData.name);
    const encodedMessage = encodeURIComponent(formData.message);
    window.location.href = `mailto:info@senabelgroup.com?subject=${encodedName}&body=${encodedMessage}`;
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen md:mt-5 mt-36 md:-mb-64"
      style={{ direction: 'rtl' }}
    >
      <div className="max-w-5xl w-full p-4">
        <h1 className="md:text-4xl text-3xl font-bold text-center text-yellow-400 mb-4 pb-12">
          تواصل معنا
        </h1>
        {/* Page Title */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="اكتب اسمك .."
                className="border p-2 rounded"
                onChange={handleInputChange}
                value={formData.name}
              />
              <input
                type="email"
                name="email"
                placeholder="اكتب ايميلك .."
                className="border p-2 rounded"
                onChange={handleInputChange}
                value={formData.email}
              />
              <textarea
                name="message"
                placeholder="اكتب رسالتك .."
                className="border p-2 rounded"
                onChange={handleInputChange}
                value={formData.message}
              />
              <button
                type="submit"
                style={{ zIndex: 2 }}
                className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-700 w-full h-auto"
                onClick={handleSubmit}
              >
                أرسل رسالتك
              </button>
            </form>
          </div>
          <div className="order-1 md:order-2 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              className="w-full h-64 md:h-full"
              style={{ zIndex: 3 }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3010.366583782938!2d28.9492!3d41.0172352!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caba2119afe803%3A0x71fc7a054d06609b!2sAk%C5%9Femsettin%2C%20Fevzi%20Pa%C5%9Fa%20Cd.%20No%3A11%2C%2034080%20Fatih%2F%C4%B0stanbul!5e0!3m2!1sar!2str!4v1684598571774!5m2!1sar!2str"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
