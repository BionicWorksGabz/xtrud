"use client";

import { useState } from "react";

interface ContactFormProps {
  onSubmit: (formData: {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
  }) => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Assunto é obrigatório";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      try {
        // Simulando envio do formulário
        await new Promise((resolve) => setTimeout(resolve, 1000));
        onSubmit(formData);
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } catch (error) {
        console.error("Erro ao enviar formulário:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="bg-dark-gray rounded-lg p-6 shadow-lg">
      {submitSuccess ? (
        <div className="text-center py-8">
          <div className="text-primary text-5xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-white mb-2">
            Mensagem Enviada!
          </h3>
          <p className="text-gray-300 mb-6">
            Obrigado pelo seu contato. Retornaremos em breve.
          </p>
          <button
            className="btn-primary"
            onClick={() => setSubmitSuccess(false)}
          >
            Enviar Nova Mensagem
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-group">
            <label htmlFor="name" className="form-label text-white">
              Nome *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`form-input bg-gray-800 text-white border-gray-700 ${
                errors.name ? "error" : ""
              }`}
              placeholder="Seu nome"
            />
            {errors.name && (
              <p className="error-message">{errors.name}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label text-white">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input bg-gray-800 text-white border-gray-700 ${
                errors.email ? "error" : ""
              }`}
              placeholder="Seu email"
            />
            {errors.email && (
              <p className="error-message">{errors.email}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label text-white">
              Telefone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input bg-gray-800 text-white border-gray-700"
              placeholder="Seu telefone (opcional)"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject" className="form-label text-white">
              Assunto *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`form-input bg-gray-800 text-white border-gray-700 ${
                errors.subject ? "error" : ""
              }`}
              placeholder="Assunto da mensagem"
            />
            {errors.subject && (
              <p className="error-message">{errors.subject}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label text-white">
              Mensagem *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`form-textarea bg-gray-800 text-white border-gray-700 ${
                errors.message ? "error" : ""
              }`}
              placeholder="Sua mensagem"
            ></textarea>
            {errors.message && (
              <p className="error-message">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="btn-primary w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </form>
      )}
    </div>
  );
}
