import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <CircleImage />

      <div
        className="
          grid items-center justify-center
          min-h-screen max-w-5xl gap-6 mx-auto
          md:grid-cols-2
          pt-44 sm:pt-28 md:pt-32
          px-4 sm:px-6
              "
      >
        {/* Columna texto */}
        <div className="w-full">
          {/* Contenedor del copy con ancho óptimo de lectura */}
          <div className="mx-auto w-full max-w-[68ch]">
            <h1
              className="
                mb-3 sm:mb-4 md:mb-5
                text-center md:text-left
                font-extrabold tracking-tight leading-tight text-balance
                text-[clamp(1.25rem,5vw,2rem)]
                md:text-[clamp(1.6rem,3.2vw,2.5rem)]
              "
            >
              Mis <span className="text-secondary">servicios</span>.
            </h1>

            <p
              className="
                text-pretty text-white/85
                leading-relaxed md:leading-8
                text-[clamp(0.95rem,2.6vw,1.05rem)]
                md:text-[clamp(1rem,1.6vw,1.125rem)]
                mb-6
              "
            >
              Desarrollo web frontend, enfocándome en construir experiencias digitales
              modernas que combinan diseño atractivo con alto rendimiento. Domino
              tecnologías como JavaScript, React, Bootstrap y Tailwind CSS, con las que
              creo interfaces dinámicas, responsivas y alineadas con la identidad de cada
              marca, ayudando a fortalecer su presencia en línea y generar mayor impacto
              en los usuarios.
            </p>

            <a
              href="https://wa.me/573054277020"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center
                rounded-lg bg-secondary px-5 py-3 font-semibold text-black
                transition-colors hover:bg-secondary/80
                focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60
                w-full sm:w-auto
              "
            >
              Contáctame
            </a>
          </div>
        </div>

        {/* SLIDER */}
        <div className="w-full ">
          <SliderServices />
        </div>
       
      </div>
    </>
  );
};

export default ServicesPage;
