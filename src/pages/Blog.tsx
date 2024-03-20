import { NavBar, CardBlog } from '../components';
import img from '../assets/service.jpeg';
import BlogVector from './BlogVector';

interface blogProps {
  image: string;
  date: string;
  title: string;
  description: string;
}

const Service = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const pages: blogProps[] = [
    {
      image: img,
      date: 'Jan 2024',
      title: 'EKS Cluster Implementation and Security Considerations',
      description:
        'Picture a chaotic kitchen with pots and pans clanging, ingredients flying in all directions, and chefs feeling stressed as they try to handle the cooking chaos. Now, imagine Kubernetes as the Gordon Ramsey of the digital kitchen, swooping in with his chef',
    },
    {
      image: img,
      date: 'Jan 2024',
      title: 'EKS Cluster Implementation and Security Considerations',
      description:
        'Picture a chaotic kitchen with pots and pans clanging, ingredients flying in all directions, and chefs feeling stressed as they try to handle the cooking chaos. Now, imagine Kubernetes as the Gordon Ramsey of the digital kitchen, swooping in with his chef',
    },
    {
      image: img,
      date: 'Jan 2024',
      title: 'EKS Cluster Implementation and Security Considerations',
      description:
        'Picture a chaotic kitchen with pots and pans clanging, ingredients flying in all directions, and chefs feeling stressed as they try to handle the cooking chaos. Now, imagine Kubernetes as the Gordon Ramsey of the digital kitchen, swooping in with his chef',
    },
    {
      image: img,
      date: 'Jan 2024',
      title: 'EKS Cluster Implementation and Security Considerations',
      description:
        'Picture a chaotic kitchen with pots and pans clanging, ingredients flying in all directions, and chefs feeling stressed as they try to handle the cooking chaos. Now, imagine Kubernetes as the Gordon Ramsey of the digital kitchen, swooping in with his chef',
    },
  ];

  return (
    <>
      <div
        className="relative overflow-hidden"
        style={{ minHeight: '-webkit-fill-available' }}
      >
        <BlogVector />
        <NavBar />
        <div className="w-4/5 m-auto flex flex-col  lg:flex-row lg:flex-wrap ">
          {pages.map((ele, index) => (
            <CardBlog
              image={img}
              date={ele.date}
              title={ele.title}
              description={ele.description}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
