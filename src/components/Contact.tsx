import { Body } from "./Body";
import { Window } from "./Window";

const links = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/sofiagonzaloc/",
    img: "https://web.archive.org/web/20090726195629/http://www.geocities.com/bofcarbon1/imgs/universe6.gif",
  },
  {
    name: "Github",
    href: "https://github.com/SofiaGonzaloC",
    img: "https://web.archive.org/web/20090729173015/http://www.geocities.com/wilborniti/planet3.gif"
  },
  {
    name: "Email",
    href: "mailto:sofiagonzaloc@outlook.com",
    img: "https://web.archive.org/web/20091027063327/http://www.geocities.com/wilborniti/planet7.gif"
  },
];

export const Contact = () => {
  return (
    <Body id="contact">
      <Window title="Contact me">
        <div className="flex justify-evenly items-center">
          {links.map((link) => (
            <a key={link.name} className="text-center m-6 hover:underline" href={link.href}>
              <img src={link.img} alt={link.name} className="w-24 h-24"/>
              <h5>{link.name}</h5>
            </a>
          ))}
        </div>
      </Window>
    </Body>
  );
};
