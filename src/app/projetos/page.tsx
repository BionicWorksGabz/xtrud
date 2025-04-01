"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import ProjectFilter from "@/components/ProjectFilter";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  // Categorias de exemplo
  const categories = ["Residencial", "Comercial", "Interiores", "Conceitual"];
  const [activeCategory, setActiveCategory] = useState("todos");

  // Dados de exemplo para os projetos
  const allProjects = [
    {
      id: "golden-center",
      title: "Golden Center",
      category: "Comercial",
      imageUrl: "/images/projects/golden-center.jpg",
      year: "2024",
    },
    {
      id: "smart-mozar-amaral",
      title: "Smart Mozar Amaral",
      category: "Residencial",
      imageUrl: "/images/projects/smart-mozar.jpg",
      year: "2023",
    },
    {
      id: "predisul-terrazzo",
      title: "Predisul Terrazzo",
      category: "Residencial",
      imageUrl: "/images/projects/predisul.jpg",
      year: "2023",
    },
    {
      id: "smart-arch",
      title: "Smart Arch",
      category: "Comercial",
      imageUrl: "/images/projects/smart-arch.jpg",
      year: "2022",
    },
    {
      id: "apartment-smart-arch",
      title: "Apartment Smart Arch",
      category: "Interiores",
      imageUrl: "/images/projects/apartment.jpg",
      year: "2022",
    },
    {
      id: "garage-smart-arch",
      title: "Garage Smart Arch",
      category: "Interiores",
      imageUrl: "/images/projects/garage.jpg",
      year: "2022",
    },
    {
      id: "house-g",
      title: "House G",
      category: "Residencial",
      imageUrl: "/images/projects/house-g.jpg",
      year: "2021",
    },
    {
      id: "house-f",
      title: "House F",
      category: "Residencial",
      imageUrl: "/images/projects/house-f.jpg",
      year: "2021",
    },
    {
      id: "house-s",
      title: "House S",
      category: "Residencial",
      imageUrl: "/images/projects/house-s.jpg",
      year: "2020",
    },
    {
      id: "concept-tower",
      title: "Concept Tower",
      category: "Conceitual",
      imageUrl: "/images/projects/concept-tower.jpg",
      year: "2023",
    },
    {
      id: "urban-plaza",
      title: "Urban Plaza",
      category: "Comercial",
      imageUrl: "/images/projects/urban-plaza.jpg",
      year: "2022",
    },
    {
      id: "modern-loft",
      title: "Modern Loft",
      category: "Interiores",
      imageUrl: "/images/projects/modern-loft.jpg",
      year: "2021",
    },
  ];

  // Filtrar projetos com base na categoria selecionada
  const filteredProjects = activeCategory === "todos"
    ? allProjects
    : allProjects.filter(project => project.category === activeCategory);

  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Nossos <span className="text-primary">Projetos</span>
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Explore nossa coleção de visualizações arquitetônicas, desde residências 
              e edifícios comerciais até interiores detalhados e conceitos inovadores.
            </p>
          </div>

          {/* Filtros de projetos */}
          <ProjectFilter 
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {/* Grid de projetos */}
          <div className="gallery-grid">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                imageUrl={project.imageUrl}
                year={project.year}
              />
            ))}
          </div>

          {/* Mensagem quando não há projetos na categoria */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-300 text-lg">
                Nenhum projeto encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
