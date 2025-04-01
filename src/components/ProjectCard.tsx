"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  year: string;
}

export default function ProjectCard({
  id,
  title,
  category,
  imageUrl,
  year,
}: ProjectCardProps) {
  return (
    <Link href={`/projetos/${id}`} className="project-card">
      <div className="project-image-container">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="project-image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="project-image-placeholder" />
        )}
      </div>
      
      <div className="project-overlay">
        <h3 className="project-title">{title}</h3>
        <div className="project-meta">
          <span className="project-category">{category}</span>
          <span className="project-year">{year}</span>
        </div>
      </div>
    </Link>
  );
}
