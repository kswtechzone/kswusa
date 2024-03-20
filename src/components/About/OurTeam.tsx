import CEO from '../../assets/sanjay.jpg';
import TeamCard from '../Card/TeamCard';

export default function OurTeam() {
  interface TeamMember {
    img: string;
    name: string;
    role: string;
    facebook?: string;
    linkedin?: string;
    github?: string;
    twitter?: string;
  }
  const leader: TeamMember[] = [
    {
      img: '/picture/Buddharam.jpg',
      name: 'Buddharam Mahato',
      role: 'Legal and Local Advisor',
    },

    {
      img: '/picture/Aneep.jpg',
      name: 'Anip Shah',
      role: ' IOT & Robotics Head',
      linkedin: 'https://www.linkedin.com/in/anip-shah-ab5029258/',
    },
    {
      img: '/picture/Pranish.jpg',
      name: 'Pranish Shukla',
      role: 'Cyber Security Expert',
      linkedin: 'https://www.linkedin.com/in/pernishshukla/',
      github: 'https://twitter.com/errorsec_',
    },
    {
      img: '/picture/mina.jpg',
      name: 'Mina Singh',
      role: 'Digital Marketing',
      linkedin: 'https://www.linkedin.com/in/mina-kumari-singh-88b744259/',
    },
    {
      img: '/picture/suman.png',
      name: 'Suman Sharma',
      role: ' Backend Developer, Project Manager',
      facebook: 'https://www.facebook.com/suman7802',
      linkedin: 'https://www.linkedin.com/in/suman-sharma-502785228',
      github: 'https://github.com/suman7802',
    },
  ];
  const team: TeamMember[] = [
    {
      img: '/picture/raman.jpg',
      name: 'Raman Khadgi',
      role: ' Frontend Developer ',
      facebook: 'https://www.facebook.com/raman.khadgi.39/',
      linkedin: 'https://www.linkedin.com/in/raman-khadgi/',
      github: 'https://github.com/Adro1t',
    },
    {
      img: '/picture/prabin.jpg',
      name: 'Prabin Ghimire',
      role: 'Backend Developer',
      facebook: 'https://www.facebook.com/mepraveenghimire/',
      linkedin: 'https://www.linkedin.com/in/praveen-ghimire-07805320b/',
      github: 'https://github.com/ghimirepraveen',
    },
    {
      img: '/picture/sagar.png',
      name: 'Sagar Maharjan',
      role: ' UI/UX ',
      facebook: 'https://www.facebook.com/sagar.maharjan.3150',
      linkedin: 'https://www.linkedin.com/in/sagar-maharjan-bbb4b92a4/',
      github: 'https://github.com/Sagarmhz',
    },
    {
      img: '/picture/reeta.jpg',
      name: 'Rita Gainju',
      role: ' Frontend Developer ',
      facebook: '',
      linkedin: 'https://www.linkedin.com/in/rita-gainju-85976a27a/',
      github: 'https://github.com/Riittaaa',
    },
    {
      img: '/picture/ram.jpg',
      name: 'Ram Goja Shrestha',
      role: 'Frontend Developer',
      facebook: 'https://www.linkedin.com/in/ram-shrestha-4b799a27a/',
      linkedin: 'https://www.linkedin.com/in/ram-shrestha-4b799a27a/',
      github: 'https://github.com/ramgoja',
    },
    {
      img: '/picture/diwash.jpg',
      name: 'Diwash Bhattarai',
      role: 'Frontend Developer',
      facebook: 'https://www.facebook.com/diwash.bhattarai.18/',
      linkedin: 'https://www.linkedin.com/in/diwash-bhattarai-343a41202/',
      github: 'https://github.com/diwashbhattarai999',
    },
    {
      img: '/picture/sachin.jpg',
      name: 'Sachin Kunwar',
      role: ' Frontend Developer ',
      facebook: 'https://www.facebook.com/sachin.kunwar.5059',
      linkedin: 'https://www.linkedin.com/in/sachin-kunwar-3a690b278/',
      github: 'https://github.com/boyka06',
    },
    {
      img: '/picture/anushka.jpg',
      name: 'Anushka Aryal',
      role: ' Frontend Developer ',
      facebook: 'https://www.facebook.com/anushka.aryal.2',
      linkedin: 'https://www.linkedin.com/in/anushka-aryal-27916722a/',
      github: 'https://github.com/anushka712',
    },
    {
      img: '/picture/gopal.jpg',
      name: 'Gopal Pokhrel',
      role: ' Frontend Developer',
      facebook: 'https://www.facebook.com/profile.php?id=100021728379892',
      linkedin: 'https://www.linkedin.com/in/gopal-pokhrel-868a23238/',
      github: 'https://github.com/gopalpokhrel1',
    },
    {
      img: '/picture/prashant.jpeg',
      name: 'Prashant Mahato',
      role: 'Frontend Developer',
      facebook: '',
      linkedin:
        'https://www.linkedin.com/in/prashant-mahato-kushwansi-b4a5aa258/',
      github: 'https://github.com/imkrprashant18',
    },
    {
      img: '/picture/rahul.jpg',
      name: 'Rahul Maharjan',
      role: 'UI/UX',
      facebook: 'https://www.facebook.com/rahul.maharjam',
      linkedin: 'https://www.linkedin.com/in/rahul-maharjan-a57256207/',
      github: 'https://github.com/Rahul-Maharjan',
    },
    {
      img: '/picture/aju.jpg',
      name: 'Aju Maharjan',
      role: 'Frontend Developer',
      facebook: 'https://www.facebook.com/yaju.maharjan.50',
      linkedin: 'https://www.linkedin.com/in/aju-maharjan-4a987b212/',
      github: 'https://github.com/aju513',
    },
    {
      img: '/picture/manisha.jpg',
      name: 'Manisha Kumari Tharu',
      role: 'Frontend Developer',
      facebook: 'https://www.facebook.com/profile.php?id=100021728379892',
      linkedin: 'https://www.linkedin.com/in/manisha-kumari-tharu-759425238/',
      github: 'https://github.com/manisha54',
    },
  ];
  return (
    <>
      <div className="z-50 mt-16 md:mt-20 lg:mt-28 xl:mt-56">
        <h1 className="font-light text-xl sm:text-2xl text-center px-3 sm:w-1/2 sm:m-auto">
          A diverse team with varied expertise collaborating to explore
          innovative solutions through unique approaches.
        </h1>

        <div className="flex flex-col items-center w-4/5 m-auto gap-8 px-4 mt-20 md:flex-row md:justify-between md:items-center lg:justify-center">
          <div className=" w-full lg:w-3/5 m-auto">
            <h1 className="font-bold text-[1.2rem] sm:text-[2rem]s sm:text-center md:text-left">
              Sanjay Kumar Singh
            </h1>
            <p className="text-sm font-light sm:text-center md:text-left">
              CEO, IT & Business Consultant
            </p>

            <div className="w-full h-[1px] bg-gray-500 my-3" />

            <p className="">
              Since 2022, we've been on a mission to enhance human access to
              services through innovative platforms. Delivering diverse services
              with top- notch IT solutions, our journey is dedicated to making a
              positive impact.
            </p>
          </div>
          <div className=" w-full h-fit sm:w-[40%] grid place-items-center">
            <img
              src={CEO}
              alt="ksw ceo"
              className="h-[20rem] rounded-2xl object-contain shadow-lg shadow-gray-400"
            />
          </div>
        </div>

        <div>
          <p className="p-4 md:w-4/5 md:m-auto lg:mt-24 font-light text-2xl text-center">
            Cheers to our amazing team for pushing boundaries and contributing
            to Nepal's tech landscape!
          </p>
        </div>

        <div className="grid w-4/5 m-auto gap-y-10  mt-10 place-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {leader.map((item, index) => (
            <TeamCard
              image={item.img}
              name={item.name}
              role={item.role}
              key={index}
              facebook={item.facebook}
              linkedin={item.linkedin}
              github={item.github}
              twitter={item.twitter}
            />
          ))}
        </div>

        <h1 className="text-center mt-16 font-bold text-[1.2rem] sm:text-[2rem]">
          Our team
        </h1>

        <div className="grid w-4/5 m-auto gap-y-10 mt-10 place-items-center sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {team.map((item, index) => (
            <TeamCard
              image={item.img}
              name={item.name}
              role={item.role}
              key={index}
              facebook={item.facebook}
              linkedin={item.linkedin}
              github={item.github}
              twitter={item.twitter}
            />
          ))}
        </div>
      </div>
    </>
  );
}
