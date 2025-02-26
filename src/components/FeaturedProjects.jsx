import Card from "./Card";
import port1 from "../assets/port1.png";
import port2 from "../assets/port2.png";
import port3 from "../assets/port3.png";
import port4 from "../assets/port4.png";

const Title = () => (
  <>
    Featured <strong className="text-secondary font-semibold">Projects</strong>
  </>
);

const FeaturedProjects = () => {
  return (
    <Card title={<Title />}>
      <div>
        <p>Here are some of my projects:</p>
        <div className="grid gap-6 mt-4">
          <div className="col-span-2 relative p-4 border border-neutral-600 rounded-md transition duration-500 hover:scale-105">
            <img
              className="w-full h-64 object-cover"
              src={port1}
              alt="portfolio 1"
            />
            <a
              className="absolute inset-0 bg-black opacity-15 hover:opacity-0 transition duration-700"
              href="https://youtu.be/_tBBpRvjTvE"
              target="_blank"
            ></a>
          </div>
          <div className="col-span-2 lg:col-span-1 relative p-4 border border-neutral-600 rounded-md transition duration-500 hover:scale-105 lg:aspect-square">
            <img
              className="w-full h-64 lg:h-auto object-cover"
              src={port2}
              alt="portfolio 2"
            />
            <a
              className="absolute inset-0 bg-black opacity-15 hover:opacity-0 transition duration-700"
              href="https://youtu.be/xAQ4TE3wjmU"
              target="_blank"
              title="Point of Sales Website"
            ></a>
          </div>
          <div className="col-span-2 lg:col-span-1 relative p-4 border border-neutral-600 rounded-md transition duration-500 hover:scale-105 lg:aspect-square">
            <img
              className="w-full h-64 lg:h-auto object-cover"
              src={port3}
              alt="portfolio 3"
            />
            <a
              className="absolute inset-0 bg-black opacity-15 hover:opacity-0 transition duration-700"
              href="https://youtu.be/VpyV0aPYal4"
              target="_blank"
              title="Google Drive File Copier"
            ></a>
          </div>
          {/* <div className="col-span-2 relative p-4 border border-neutral-600 rounded-md transition duration-500 hover:scale-105">
            <img
              className="w-full h-64 object-cover"
              src={port4}
              alt="portfolio 4"
            />
            <a
              className="absolute inset-0 bg-black opacity-15 hover:opacity-0 transition duration-700"
              href="#"
              target="_blank"
            ></a>
          </div> */}
        </div>
      </div>
    </Card>
  );
};

export default FeaturedProjects;
