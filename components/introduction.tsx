"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaDownload, FaProjectDiagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import Link from "next/link";

const Introduction = () => {
  const [open, setOpen] = useState(false);
  const hvRef = useRef<HTMLDivElement | null>(null);

  // Cerrar dropdown al hacer click fuera o con Escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (hvRef.current && !hvRef.current.contains(e.target as Node)) setOpen(false);
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <section className="relative z-20 w-full bg-darkBg/60">
      <div className=" mt-32 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 py-8 sm:px-6 md:py-12 lg:grid-cols-2 lg:gap-12 lg:px-8 xl:gap-16">
        {/* Avatar */}
        <div className="order-1 flex w-full items-center justify-center lg:order-none lg:justify-end">
          <div className="relative">
            <Image
              className="rounded-full transition-all duration-300 object-cover"
              src="/home-4.png"
              priority
              alt="Avatar"
              width={320} // ancho base para cálculos internos
              height={320}
              sizes="(max-width: 640px) 40vw,
                     (max-width: 1024px) 30vw,
                     (max-width: 1536px) 24vw,
                     320px"
              // Tamaños responsivos controlados por el contenedor
              style={{ width: "min(40vw, 320px)", height: "auto" }}
            />
            {/* Halo/blur opcional; quítalo si no lo usas */}
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-2xl opacity-30"
                 style={{ background: "radial-gradient(40% 40% at 50% 50%, var(--tw-shadow-color, #24c8c1), transparent)" }} />
          </div>
        </div>

        {/* Texto / CTAs */}
        <div className="flex w-full max-w-2xl flex-col justify-center">
          <h1 className="mb-4 text-center font-semibold leading-tight md:text-left
                         text-[clamp(1.5rem,3.5vw,2.5rem)]">
            Cada idea es un comienzo,<br />
            <TypeAnimation
              sequence={[
                "Conviértela en código", 1000,
                "Conviértela en diseño", 1000,
                "Conviértela en experiencia", 1000,
                "Conviértela en realidad", 1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-extrabold text-secondary"
            />
          </h1>

          <p className="mx-auto mb-6 text-center md:mx-0 md:text-left
                        text-[clamp(0.95rem,2.2vw,1.15rem)] opacity-90">
            Soy desarrollador frontend con más de 2 años de experiencia, especializado en
            <b> React y Tailwind CSS</b>, creando interfaces modernas que inspiran y conectan
            con las personas. <b>Si lo piensas, lo creamos.</b>
          </p>

          {/* Botones */}
          <div className="flex w-full flex-wrap items-center justify-center gap-3 md:justify-start">
            <Link
              href="/portfolio"
              className="flex w-full items-center justify-center gap-2 rounded-xl border-2 px-4 py-2 text-md transition-all hover:shadow-xl hover:shadow-white/40 sm:w-auto"
            >
              <FaProjectDiagram size={20} />
              <b>Proyectos</b>
            </Link>

            <Link
              href="https://wa.me/573054277020"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-green-500 px-4 py-2 text-md text-green-500 transition-all hover:shadow-xl hover:shadow-green-500 sm:w-auto"
            >
              <FaPhone size={18} />
              <b>Contáctame</b>
            </Link>

            {/* HV con dropdown */}
            <div className="relative z-[60] w-full sm:w-auto" ref={hvRef}>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-secondary px-4 py-2 text-md text-secondary transition-all hover:shadow-xl hover:shadow-secondary sm:w-auto"
                aria-haspopup="menu"
                aria-expanded={open}
                aria-controls="hv-menu"
              >
                <FaDownload size={18} />
                <b>HV</b>
              </button>

              {open && (
                <div
                  id="hv-menu"
                  role="menu"
                  className="absolute right-0 top-full mt-2 w-64 overflow-hidden rounded-xl border border-secondary bg-black/85 text-white shadow-2xl backdrop-blur"
                  onMouseDown={(e) => e.stopPropagation()}
                >
                  {/* Español */}
                  <div className="px-4 py-2 text-sm font-bold opacity-70">Español</div>
                  <div className="flex">
                    <a
                      href="/docs/HV.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      role="menuitem"
                      className="block w-1/2 px-4 py-2 text-center text-sm hover:bg-secondary/80"
                      onClick={() => setOpen(false)}
                    >
                      Ver
                    </a>
                    <a
                      href="/docs/HV.pdf"
                      download
                      role="menuitem"
                      className="block w-1/2 px-4 py-2 text-center text-sm hover:bg-secondary/80"
                      onClick={() => setOpen(false)}
                    >
                      Descargar
                    </a>
                  </div>


                 
                  <div className="flex">
                  
                    
                  </div>
                </div>
              )}
            </div>
            {/* Fin HV */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
