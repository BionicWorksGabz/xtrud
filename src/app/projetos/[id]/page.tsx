"use client";

import { notFound } from "next/navigation";
import Layout from "@/components/Layout";
import ImageGallery from "@/components/ImageGallery";
import VideoPlayer from "@/components/VideoPlayer";
import Link from "next/link";

interface ProjectParams {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectParams) {
  // Dados de exemplo para os projetos
  const projects = {
    "golden-center": {
      title: "Golden Center",
      category: "Comercial",
      client: "Sena Arquitetos Associados",
      location: "Brasil",
      year: "2024",
      software: "3ds Max / Corona Renderer / Photoshop / After Effects",
      description: "O Golden Center é um edifício comercial moderno que combina funcionalidade e estética sofisticada. A fachada apresenta elementos dourados distintivos que se destacam contra o revestimento branco, criando um contraste elegante. O projeto foi desenvolvido para maximizar a entrada de luz natural enquanto mantém a eficiência energética através de seu design inovador.",
      images: [
        { src: "/images/projects/golden-center/01.jpg", alt: "Vista frontal do Golden Center" },
        { src: "/images/projects/golden-center/02.jpg", alt: "Vista lateral do Golden Center" },
        { src: "/images/projects/golden-center/03.jpg", alt: "Detalhe da fachada" },
        { src: "/images/projects/golden-center/04.jpg", alt: "Vista aérea do Golden Center" },
        { src: "/images/projects/golden-center/05.jpg", alt: "Entrada principal" },
        { src: "/images/projects/golden-center/06.jpg", alt: "Vista noturna" }
      ],
      video: "/videos/golden-center.mp4"
    },
    "smart-mozar-amaral": {
      title: "Smart Mozar Amaral",
      category: "Residencial",
      client: "Smart Arquitetura",
      location: "Brasil",
      year: "2023",
      software: "3ds Max / Corona Renderer / Photoshop",
      description: "O Smart Mozar Amaral é um edifício residencial que combina design contemporâneo com funcionalidade. A fachada apresenta um jogo de volumes e texturas que criam movimento e interesse visual. O projeto foi concebido para proporcionar conforto e qualidade de vida aos moradores, com amplas varandas e áreas comuns bem planejadas.",
      images: [
        { src: "/images/projects/smart-mozar/01.jpg", alt: "Fachada do Smart Mozar Amaral" },
        { src: "/images/projects/smart-mozar/02.jpg", alt: "Vista lateral" },
        { src: "/images/projects/smart-mozar/03.jpg", alt: "Detalhe da fachada" },
        { src: "/images/projects/smart-mozar/04.jpg", alt: "Área comum" }
      ],
      video: null
    },
    // Outros projetos seriam adicionados aqui
  };

  const project = projects[params.id as keyof typeof projects];

  // Se o projeto não existir, retorna 404
  if (!project) {
    notFound();
  }

  // Encontrar projetos anterior e próximo (simplificado)
  const projectIds = Object.keys(projects);
  const currentIndex = projectIds.indexOf(params.id);
  const prevProject = currentIndex > 0 ? projectIds[currentIndex - 1] : null;
  const nextProject = currentIndex < projectIds.length - 1 ? projectIds[currentIndex + 1] : null;

  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">{project.title}</h1>
            <div className="flex items-center text-gray-300">
              <span className="text-primary">{project.category}</span>
              <span className="mx-2">•</span>
              <span>{project.year}</span>
            </div>
          </div>

          {/* Galeria principal ou vídeo */}
          <div className="mb-12">
            {project.video ? (
              <VideoPlayer 
                src={project.video} 
                poster={project.images[0].src}
                title={project.title}
              />
            ) : (
              <div className="relative w-full h-[60vh] bg-dark-gray rounded-lg overflow-hidden">
                <img 
                  src={project.images[0].src} 
                  alt={project.images[0].alt}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Informações do projeto e descrição */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-white mb-4">Sobre o Projeto</h2>
              <p className="text-gray-300">{project.description}</p>
            </div>
            <div className="bg-dark-gray p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Informações</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-primary font-medium">Cliente</p>
                  <p className="text-white">{project.client}</p>
                </div>
                <div>
                  <p className="text-primary font-medium">Localização</p>
                  <p className="text-white">{project.location}</p>
                </div>
                <div>
                  <p className="text-primary font-medium">Ano</p>
                  <p className="text-white">{project.year}</p>
                </div>
                <div>
                  <p className="text-primary font-medium">Softwares</p>
                  <p className="text-white">{project.software}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Galeria de imagens */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">Galeria</h2>
            <ImageGallery images={project.images} />
          </div>

          {/* Navegação entre projetos */}
          <div className="flex justify-between items-center border-t border-gray-700 pt-8">
            {prevProject ? (
              <Link href={`/projetos/${prevProject}`} className="flex items-center text-gray-300 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                Projeto Anterior
              </Link>
            ) : (
              <div></div>
            )}
            
            <Link href="/projetos" className="text-primary hover:underline">
              Todos os Projetos
            </Link>
            
            {nextProject ? (
              <Link href={`/projetos/${nextProject}`} className="flex items-center text-gray-300 hover:text-primary transition-colors">
                Próximo Projeto
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
