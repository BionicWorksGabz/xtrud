"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  // Função para lidar com o envio do formulário
  const handleFormSubmit = (formData: {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
  }) => {
    // Em um ambiente real, aqui seria implementada a lógica para enviar o email
    // ou salvar os dados do formulário em um banco de dados
    console.log("Formulário enviado:", formData);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-dark-gray">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Entre em <span className="text-primary">Contato</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Estamos prontos para transformar seu projeto em visualizações impressionantes
            </p>
          </div>
        </div>
      </section>

      {/* Formulário de Contato e Informações */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Envie uma <span className="text-primary">Mensagem</span>
              </h2>
              <ContactForm onSubmit={handleFormSubmit} />
            </div>

            {/* Informações de Contato */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Informações de <span className="text-primary">Contato</span>
              </h2>
              
              <div className="bg-dark-gray p-8 rounded-lg">
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-3">Endereço</h3>
                  <p className="text-gray-300">
                    Av. Exemplo, 1234<br />
                    Bairro, Cidade - Estado<br />
                    CEP: 00000-000<br />
                    Brasil
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-3">Contato</h3>
                  <p className="text-gray-300 mb-2">
                    <strong className="text-primary">Email:</strong> contato@xtrudstudio.com
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-primary">Telefone:</strong> +55 (XX) XXXX-XXXX
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Redes Sociais</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Horário de Funcionamento */}
              <div className="bg-dark-gray p-8 rounded-lg mt-8">
                <h3 className="text-xl font-semibold text-white mb-3">Horário de Funcionamento</h3>
                <div className="grid grid-cols-2 gap-2">
                  <p className="text-gray-300">Segunda - Sexta:</p>
                  <p className="text-gray-300">9:00 - 18:00</p>
                  
                  <p className="text-gray-300">Sábado:</p>
                  <p className="text-gray-300">10:00 - 14:00</p>
                  
                  <p className="text-gray-300">Domingo:</p>
                  <p className="text-gray-300">Fechado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
