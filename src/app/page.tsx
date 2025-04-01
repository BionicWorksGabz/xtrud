import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

export default function Home() {
  // Dados de exemplo para o hero slider
  const heroSlides = [
    {
      image: "/images/hero1.jpg",
      title: "Xtrud Studio",
      subtitle: "Visualização arquitetônica de alta qualidade",
    },
    {
      image: "/images/hero2.jpg",
      title: "Projetos Impressionantes",
      subtitle: "Transformando conceitos em realidade visual",
    },
    {
      image: "/images/hero3.jpg",
      title: "Experiência e Qualidade",
      subtitle: "Detalhes que fazem a diferença",
    },
  ];

  // Dados de exemplo para os projetos em destaque
  const featuredProjects = [
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
      id: "house-g",
      title: "House G",
      category: "Residencial",
      imageUrl: "/images/projects/house-g.jpg",
      year: "2021",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection slides={heroSlides} />

      {/* Projetos em Destaque */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Projetos em <span className="text-primary">Destaque</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Explore nossa seleção de projetos de visualização arquitetônica,
              onde cada imagem conta uma história de design, inovação e atenção
              aos detalhes.
            </p>
          </div>

          <div className="gallery-grid">
            {featuredProjects.map((project) => (
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

          <div className="text-center mt-12">
            <Link href="/projetos" className="btn-secondary">
              Ver Todos os Projetos
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre a Xtrud Studio */}
      <section className="section-padding bg-dark-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Sobre a <span className="text-primary">Xtrud Studio</span>
              </h2>
              <p className="text-gray-300 mb-6">
                A Xtrud Studio é especializada em visualização arquitetônica de
                alta qualidade, transformando projetos em imagens e vídeos
                impressionantes que capturam a essência e o potencial de cada
                espaço.
              </p>
              <p className="text-gray-300 mb-6">
                Nossa equipe combina conhecimento técnico avançado com
                sensibilidade artística para criar representações visuais que não
                apenas mostram, mas também emocionam e inspiram.
              </p>
              <Link href="/sobre" className="btn-primary">
                Conheça Nossa História
              </Link>
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

      {/* Serviços */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Nossos <span className="text-primary">Serviços</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Oferecemos soluções completas de visualização para projetos
              arquitetônicos, desde imagens estáticas até experiências imersivas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Serviço 1 */}
            <div className="bg-dark-gray p-6 rounded-lg text-center hover:bg-dark-gray/80 transition-colors">
              <div className="text-primary text-4xl mb-4">
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
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Visualização Exterior
              </h3>
              <p className="text-gray-300">
                Renderizações fotorrealistas de fachadas e áreas externas de
                projetos arquitetônicos.
              </p>
            </div>

            {/* Serviço 2 */}
            <div className="bg-dark-gray p-6 rounded-lg text-center hover:bg-dark-gray/80 transition-colors">
              <div className="text-primary text-4xl mb-4">
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
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Visualização Interior
              </h3>
              <p className="text-gray-300">
                Ambientes internos detalhados com iluminação, materiais e
                mobiliário realistas.
              </p>
            </div>

            {/* Serviço 3 */}
            <div className="bg-dark-gray p-6 rounded-lg text-center hover:bg-dark-gray/80 transition-colors">
              <div className="text-primary text-4xl mb-4">
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
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Animação 3D
              </h3>
              <p className="text-gray-300">
                Vídeos e animações que permitem explorar o projeto de forma
                dinâmica e imersiva.
              </p>
            </div>

            {/* Serviço 4 */}
            <div className="bg-dark-gray p-6 rounded-lg text-center hover:bg-dark-gray/80 transition-colors">
              <div className="text-primary text-4xl mb-4">
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
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Realidade Virtual
              </h3>
              <p className="text-gray-300">
                Experiências interativas que permitem aos clientes explorar o
                projeto antes da construção.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Contato */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Pronto para transformar seu projeto em realidade visual?
          </h2>
          <p className="text-black/80 max-w-3xl mx-auto mb-8">
            Entre em contato conosco para discutir como podemos ajudar a
            visualizar seu próximo projeto arquitetônico.
          </p>
          <Link href="/contato" className="bg-black text-white px-8 py-3 rounded-md hover:bg-black/80 transition-colors">
            Fale Conosco
          </Link>
        </div>
      </section>
    </Layout>
  );
}
