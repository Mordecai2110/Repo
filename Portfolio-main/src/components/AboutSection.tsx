
import React from "react";

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-2/5">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src=""
                alt="Trinidad Julian - Diseñador Web"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="md:w-3/5">
            <h2 className="section-title text-left">Sobre mí</h2>
            <p className="text-lg mb-6">
              Soy Trinidad Julian,
            </p>
            <p className="text-lg mb-6">
              Mi enfoque se centra en combinar estética con usabilidad. Cada proyecto que 
              emprendo está cuidadosamente diseñado para reflejar la identidad única de mis 
              clientes mientras garantiza una experiencia de usuario excepcional.
            </p>
            <p className="text-lg">
              Trabajo con emprendedores, profesionales y empresas que buscan destacar 
              en el mundo digital con una presencia web elegante y efectiva. Mi objetivo es 
              convertir tu visión en una realidad digital que impulse tus resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
