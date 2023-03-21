import { Window } from "./Window";
import { Body } from "./Body";

const text =
  "Soy Sofía González. Tengo 21 años y estoy estudiando ingeniería en tecnologías de la información. Me apasiona todo lo relacionado con el desarrollo web y siempre estoy en busca de nuevos desafíos que me permitan crecer profesionalmente. Como desarrolladora web, he adquirido experiencia principalmente trabajando con React y Angular JS. He participado en varios proyectos en los que he tenido la oportunidad de aplicar mis conocimientos y habilidades para crear soluciones tecnológicas innovadoras y de calidad. Me gusta trabajar en equipo y siempre estoy dispuesta a colaborar y aprender de mis colegas. Este portafolio digital es una muestra de mi trabajo y de las habilidades que he adquirido durante mi formación como ingeniera en tecnologías de la información. Espero que pueda servir para que conozcas más sobre mí y mi trabajo, y para que juntos podamos crear proyectos innovadores y exitosos. ¡Gracias por visitarlo!";

const tech = [
  {
    name: "css3",
    src: "https://img.shields.io/badge/css3-%231572B6.svg?logo=css3&logoColor=white",
  },
  {
    name: "html5",
    src: "https://img.shields.io/badge/html5-%23E34F26.svg?logo=html5&logoColor=white",
  },
  {
    name: "JavaScript",
    src: "https://img.shields.io/badge/javascript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E",
  },
  {
    name: "PHP",
    src: "https://img.shields.io/badge/php-%23777BB4.svg?logo=php&logoColor=white",
  },
  {
    name: "Python",
    src: "https://img.shields.io/badge/python-3670A0?logo=python&logoColor=ffdd54",
  },
  {
    name: "TypeScript",
    src: "https://img.shields.io/badge/typescript-%23007ACC.svg?logo=typescript&logoColor=white",
  },
  {
    name: "Angular",
    src: "https://img.shields.io/badge/angular.js-%23E23237.svg?logo=angularjs&logoColor=white",
  },
  {
    name: "Bootstrap",
    src: "https://img.shields.io/badge/bootstrap-%23563D7C.svg?logo=bootstrap&logoColor=white",
  },
  {
    name: "Express",
    src: "https://img.shields.io/badge/express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB",
  },
  {
    name: "NPM",
    src: "https://img.shields.io/badge/NPM-%23000000.svg?logo=npm&logoColor=white",
  },
  {
    name: "NextJS",
    src: "https://img.shields.io/badge/Next-black?logo=next.js&logoColor=white",
  },
  {
    name: "NodeJS",
    src: "https://img.shields.io/badge/node.js-6DA55F?logo=node.js&logoColor=white",
  },
  {
    name: "ReactJS",
    src: "https://img.shields.io/badge/node.js-6DA55F?logo=node.js&logoColor=white",
  },
  {
    name: "Tailwind",
    src: "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?logo=tailwind-css&logoColor=white",
  },
  {
    name: "Git",
    src: "https://img.shields.io/badge/git-%23F05033.svg?logo=git&logoColor=white",
  },
  {
    name: "MySQL",
    src: "https://img.shields.io/badge/mysql-%2300f.svg?logo=mysql&logoColor=white",
  },
  {
    name: "MongoDB",
    src: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?logo=mongodb&logoColor=white",
  },
  {
    name: "Postres",
    src: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?logo=mongodb&logoColor=white",
  },
];

export const About = () => {
  return (
    <>
      <Body id="about">
        <div>
          <Window title="About me ...">
            <p className="leading-loose tracking-wide">{text}</p>
          </Window>
        </div>

        <div className="mt-20">
          <Window title="Technologies ...">
            <div className="p-4">
              <div className="flex justify-center grid gap-6 grid-cols-5 grid-rows-2">
                {tech.map((item) => (
                  <div key={item.name}>
                    <img src={item.src} alt={item.name} />
                  </div>
                ))}
              </div>
            </div>
          </Window>
        </div>
      </Body>
    </>
  );
};
