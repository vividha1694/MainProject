import React from "react";
import Blog_Section from "./Blog_Section";
import image1 from "../../assets/blog-big-1.jpg";
import image2 from "../../assets/blog-big-2.jpg";
import image3 from "../../assets/blog-big-4.jpg";
import image4 from "../../assets/blog-big-5.jpg";
import image5 from "../../assets/blog-big-6.jpg";
import image6 from "../../assets/blog-big-7.jpg";
const Blog_Section_card = () => {
  const cardData = [
    {
      imageUrl: "",
      link: "https://janhavipanwar.com/hello-world/",
      linkheading: "Hello World!",
      para: "Welcome to WordPress. This is your first post. Edit or delete it, then start writing!",
    },
    {
      imageUrl: image1,
      link: "https://janhavipanwar.com/what-saul-bass-can-teach-us-about-web-design/",
      linkheading: "What Saul Bass Can Teach Us About Web Design",
      para: "Nancy boy Charles down the pub get stuffed mate easy peasy brown bread car boot squiffy loo, blimey arse over tit it’s your round cup of char horse play chimney pot old. Chip shop bonnet barney owt to do with me what a plonker hotpot loo that gormless off his nut a blinding shot Harry […]",
    },
    {
      imageUrl: image2,
      link: "https://janhavipanwar.com/growing-ux-maturity-in-organizations-education-and-training/",
      linkheading:
        "Growing UX Maturity In Organizations: Education And Training",
      para: "Nancy boy Charles down the pub get stuffed mate easy peasy brown bread car boot squiffy loo, blimey arse over tit it’s your round cup of char horse play chimney pot old. Chip shop bonnet barney owt to do with me what a plonker hotpot loo that gormless off his nut a blinding shot Harry […]",
    },
    {
      imageUrl: image3,
      link: "https://janhavipanwar.com/how-to-build-and-launch-powerful-responsive-websites/",
      linkheading:
        "How To Build And Launch Powerful Responsive Websites",
      para: "Nancy boy Charles down the pub get stuffed mate easy peasy brown bread car boot squiffy loo, blimey arse over tit it’s your round cup of char horse play chimney pot old. Chip shop bonnet barney owt to do with me what a plonker hotpot loo that gormless off his nut a blinding shot Harry […]",
    },
    {
      imageUrl: image4,
      link: "https://janhavipanwar.com/the-rise-of-design-thinking-as-a-problem-solving-strategy/",
      linkheading: "The Rise Of Design Thinking As A Problem Solving Strategy",
      para: "Nancy boy Charles down the pub get stuffed mate easy peasy brown bread car boot squiffy loo, blimey arse over tit it’s your round cup of char horse play chimney pot old. Chip shop bonnet barney owt to do with me what a plonker hotpot loo that gormless off his nut a blinding shot Harry […]",
    },
    {
      imageUrl: image5,
      link: "https://janhavipanwar.com/developer-decisions-for-building-flexible-components/",
      linkheading: "Developer Decisions For Building Flexible Components",
      para: "Nancy boy Charles down the pub get stuffed mate easy peasy brown bread car boot squiffy loo, blimey arse over tit it’s your round cup of char horse play chimney pot old. Chip shop bonnet barney owt to do with me what a plonker hotpot loo that gormless off his nut a blinding shot Harry […]",
    },
    {
      imageUrl: image6,
      link: "https://janhavipanwar.com/designing-human-machine-interfaces-for-vehicles-of-the-future/",
      linkheading: "Designing Human-Machine Interfaces For Vehicles Of The Future",
      para: "Nancy boy Charles down the pub get stuffed mate easy peasy brown bread car boot squiffy loo, blimey arse over tit it’s your round cup of char horse play chimney pot old. Chip shop bonnet barney owt to do with me what a plonker hotpot loo that gormless off his nut a blinding shot Harry […]",
    }
  ];
  return (
    <div>
      {cardData.map((item) => (
        <Blog_Section
          key={item.index}
          imageUrl={item.imageUrl}
          link={item.link}
          linkheading={item.linkheading}
          para={item.para}
        />
      ))}
    </div>
  );
};

export default Blog_Section_card
