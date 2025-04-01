"use client";

import Layout from "@/components/Layout";
import Image from "next/image";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-dark-gray">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sobre a <span className="text-primary">Xtrud Studio</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Transformando conceitos arquitetônicos em experiências visuais impressionantes
            </p>
          </div>
        </div>
      </section>

      {/* Sobre a Empresa */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Nossa <span className="text-primary">História</span>
              </h2>
              <p className="text-gray-300 mb-4">
                A Xtrud Studio nasceu da paixão por arquitetura e visualização 3D de Gabriel Portes, 
                que após anos de experiência no mercado, decidiu fundar um estúdio especializado em 
                transformar projetos arquitetônicos em representações visuais de alta qualidade.
              </p>
              <p className="text-gray-300 mb-4">
                Desde nossa fundação, temos trabalhado com arquitetos, construtoras e incorporadoras, 
                ajudando a comunicar suas visões através de imagens e vídeos que capturam a essência 
                e o potencial de cada projeto.
              </p>
              <p className="text-gray-300">
                Nossa abordagem combina conhecimento técnico avançado com sensibilidade artística, 
                resultando em visualizações que não apenas mostram como o projeto será, mas também 
                transmitem a atmosfera e as emoções que o espaço pretende evocar.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-primary/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-4xl font-bold text-white">
                  <span className="text-primary">XTRUD</span> STUDIO
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="section-padding bg-dark-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Missão, Visão e <span className="text-primary">Valores</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="bg-background p-6 rounded-lg">
              <div className="text-primary text-4xl mb-4 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mx-auto"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">Missão</h3>
              <p className="text-gray-300 text-center">
                Transformar conceitos arquitetônicos em experiências visuais que inspirem, 
                emocionem e comuniquem com precisão a visão de nossos clientes.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-background p-6 rounded-lg">
              <div className="text-primary text-4xl mb-4 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mx-auto"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">Visão</h3>
              <p className="text-gray-300 text-center">
                Ser reconhecida como referência em visualização arquitetônica no Brasil, 
                estabelecendo novos padrões de qualidade e inovação no setor.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-background p-6 rounded-lg">
              <div className="text-primary text-4xl mb-4 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mx-auto"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">Valores</h3>
              <p className="text-gray-300 text-center">
                Excelência, criatividade, compromisso com prazos, atenção aos detalhes 
                e relacionamento transparente com nossos clientes e parceiros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nosso Processo */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Nosso <span className="text-primary">Processo</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Conheça as etapas do nosso processo de trabalho, desde o briefing inicial 
              até a entrega final das visualizações.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Etapa 1 */}
            <div className="bg-dark-gray p-6 rounded-lg relative">
              <div className="absolute -top-4 -left-4 bg-primary text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Briefing</h3>
              <p className="text-gray-300">
                Reunimos com o cliente para entender o projeto, objetivos, 
                referências e expectativas para as visualizações.
              </p>
            </div>

            {/* Etapa 2 */}
            <div className="bg-dark-gray p-6 rounded-lg relative">
              <div className="absolute -top-4 -left-4 bg-primary text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Modelagem 3D</h3>
              <p className="text-gray-300">
                Criamos modelos tridimensionais detalhados com base nos projetos 
                arquitetônicos fornecidos pelo cliente.
              </p>
            </div>

            {/* Etapa 3 */}
            <div className="bg-dark-gray p-6 rounded-lg relative">
              <div className="absolute -top-4 -left-4 bg-primary text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Materiais e Iluminação</h3>
              <p className="text-gray-300">
                Aplicamos materiais realistas e configuramos a iluminação para 
                criar a atmosfera desejada para cada espaço.
              </p>
            </div>

            {/* Etapa 4 */}
            <div className="bg-dark-gray p-6 rounded-lg relative">
              <div className="absolute -top-4 -left-4 bg-primary text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Renderização e Finalização</h3>
              <p className="text-gray-300">
                Renderizamos as imagens em alta resolução e realizamos o tratamento 
                final para garantir resultados impressionantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Contato */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Vamos trabalhar juntos no seu próximo projeto?
          </h2>
          <p className="text-black/80 max-w-3xl mx-auto mb-8">
            Entre em contato conosco para discutir como podemos ajudar a 
            visualizar seu próximo projeto arquitetônico.
          </p>
          <a href="/contato" className="bg-black text-white px-8 py-3 rounded-md hover:bg-black/80 transition-colors">
            Fale Conosco
          </a>
        </div>
      </section>
    </Layout>
  );
}
