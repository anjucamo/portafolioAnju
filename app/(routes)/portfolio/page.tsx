import Image from "next/image";
import Link from "next/link";

import { dataPortfolio } from "@/data";

import AvatarPortfolio from "@/components/avatar-portfolio";
import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import PortfolioBox from "@/components/portfolio-box";
import { Avatar2 } from "@/components/avatar2";

const PortfolioPage = () => {

    return (
        <ContainerPage>
            <TransitionPage />
            
           
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">Mis <span className="font-bold text-secondary">Proyectos</span></h1>

                <div className="font-semibold relative z-10 grid max-w-6xl gap-6 mx-auto mt-4 md:grid-cols-4">
                    {dataPortfolio.map((data) => (
                        <PortfolioBox key={data.id} data={data} />
                    ))}
                </div>
            </div>
             <Avatar2 />
        </ContainerPage>
    );
}

export default PortfolioPage;