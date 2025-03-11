// src/pages/Contacts.tsx
import { useState } from "react";
import { FaTelegramPlane, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Contacts = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Ваше сообщение отправлено!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 p-8">
      <h1 className="text-5xl font-bold text-blue-600 mb-16 text-center animate-fade-in">
        Свяжитесь с нами
      </h1>

      <div className="max-w-3xl w-full bg-white p-10 rounded-3xl shadow-2xl animate-slide-up">
        {/* Форма обратной связи */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Напишите нам</h2>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Ваше имя"
            required
            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Ваш Email"
            required
            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Ваше сообщение"
            required
            rows={5}
            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-300 transition resize-none"
          />

          <button
            type="submit"
            className="w-full p-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition transform hover:scale-105"
          >
            Отправить
          </button>
        </form>
      </div>

      {/* Контактная информация */}
      <div className="mt-16 text-center animate-fade-in">
        <p className="text-xl mb-4">📧 Email: <a href="mailto:example@email.com" className="text-blue-600 hover:underline">example@email.com</a></p>
        <p className="text-xl mb-8">📞 Телефон: +7 (123) 456-78-90</p>

        {/* Социальные сети */}
        <div className="flex justify-center space-x-8">
          <a
            href="https://t.me/yourlink"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-4xl hover:scale-125 transition-transform"
            title="Мы в Telegram"
          >
            <FaTelegramPlane />
          </a>

          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 text-4xl hover:scale-125 transition-transform"
            title="Мы в WhatsApp"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://instagram.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 text-4xl hover:scale-125 transition-transform"
            title="Мы в Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Contacts;
