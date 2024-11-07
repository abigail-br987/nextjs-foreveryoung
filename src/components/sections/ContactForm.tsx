"use client";
import React, { useState } from "react";
import axios from "axios";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";
import AnimatedDiv from "../minicomponents/AnimatedDiv";
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/contact", formData);
      if (response.data.success) {
        setStatus("Message sent");
      } else {
        setStatus("Failed to send.");
      }
    } catch (error) {
      console.error("Error sending contact form:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <AnimatedDiv className="space-y-3 mt-20 mb-10">
      <h1 className="text-white">Contáctanos</h1>

      <div className="max-sm:flex-col flex bg-white rounded-lg border-2 border-darkBlue ">
        <div
          className="space-y-3 bg-darkBlue  text-white p-8 md:w-max"
        >
            <h2>¡Queremos Conocerte!</h2>
          <header className="flex flex-col h-full">
            <div>
              <h3 className="text-lg font-semibold">Información de Contacto</h3>
              <ul className="pl-3">
                <li className="flex items-center space-y-2">
                  <MdEmail />. forever.young.voluntariado@gmail.com
                </li>
                <li className="flex items-center space-y-2">
                  <FaLocationDot />. Breña, Lima Perú
                </li>
              </ul>
            </div>

            <div
              className="flex-grow rounded-lg
               bg-cover bg-center 
                overflow-hidden transition-all
                max-sm:h-52
                relative my-4 sm:mb-6"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url("/images/photo2.jpeg")`,
                }}
              />
            </div>
          </header>
        </div>
        <form
          onSubmit={handleSubmit}
          className=" text-darkBlue p-8 rounded-lg "
        >
          <p>Sientete libre de hacer preguntas o hacer un comentario</p>
          <div className="py-3 flex flex-col">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre"
              className="p-2 w-full border bg-gray-100 border-gray-300 rounded"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="py-3">
            <input
              type="email"
              placeholder="Correo"
              id="email"
              name="email"
              className="p-2 w-full border bg-gray-100 border-gray-300 rounded"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="py-3 flex-grow">
            <textarea
              id="message"
              placeholder="Mensaje"
              name="message"
              className="p-2 w-full h-full min-h-16 border bg-gray-100 border-gray-300 rounded resize-none"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="float-right">
            <button className="bg-deepGreen hover:bg-green-600 transition-all py-2 px-3 rounded-lg border-2 border-darkBlue">
              Send Message
            </button>
          </div>
        </form>
      </div>
      {status && (
        <motion.p
          className="float-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {status}
        </motion.p>
      )}
    </AnimatedDiv>
  );
};

export default Contact;
