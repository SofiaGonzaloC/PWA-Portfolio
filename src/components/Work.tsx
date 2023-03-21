import { Body } from "./Body";
import { Window } from "./Window";

const projects = [
  {
    name: "RSI",
    description: "Aplicación web hecha con AngularJS, Ionic, NodeJS y Postgres para la renta de amquinaria pesada",
    href: "",
    img: "https://64.media.tumblr.com/d27fd6efb03020cd0b651cc100f9f9cb/52485e03a55e89b5-e8/s250x400/b061ad8caf85c7e49bf332cf14805b78a05d5cd4.gifv",
  },
  {
    name: "Kawi",
    description: "Aplicación web3 hecha con NextJS, Candymachine, MongoDB, NodeJS",
    href: "",
    img: "https://64.media.tumblr.com/975d57eb540707e876a5adbb8bc74b4a/52485e03a55e89b5-51/s250x400/d1097d932d61e5dd179d195ed02ae320cba6e5fb.gifv",
  },
  {
    name: "Carpool",
    description: "Aplicación web y móvil hecha con React y React native para hacer carpool a tu universidad",
    href: "",
    img: "https://64.media.tumblr.com/c3feca8787221ebeff20491c02c7016f/363b9218dab7dc52-ff/s100x200/c83c87672d86253b998d0121010e647373fcc526.gifv",
  },
  {
    name: "Cookie",
    description: "Aplicación web y móvil hecha con Bootstrap, PHP y MySQL para encontrar recetas en base a ingredientes",
    href: "",
    img: "https://64.media.tumblr.com/7bfc0282707dc5e3f9bef374d86d12d7/d1de7233fb154da0-e2/s75x75_c1/019282050055d0ddfdaebf661b8a7fc42c049958.gifv",
  },
];

export const Work = () => {
  return (
    <Body id="work">
      <Window title="Projects and experiments I have worked on...">
        {projects.map((project) => (
          <div
            key={projects.indexOf(project)}
            className="border-black border p-2 my-2"
          >
            <div className="flex items-center">
              <img
                src={project.img}
                className="w-10 m-2"
                alt={project.name}
              />

              <a href={project.href} className="hover:underline">
                {project.name}
              </a>
            </div>
            <p>{project.description}</p>
          </div>
        ))}
      </Window>
    </Body>
  );
};
