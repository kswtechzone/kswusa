import { FaFacebook, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface CardProps {
  image: string;
  name: string;
  role: string;
  facebook?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
}

const TeamCard: React.FC<CardProps> = ({
  image,
  name,
  role,
  facebook,
  linkedin,
  github,
  twitter,
}) => {
  return (
    <>
      <div className=" flex flex-col items-center h-80 z-50">
        <div className="">
          <img
            src={image}
            alt=""
            className="w-[10rem] h-[10rem] rounded-full object-cover shadow-lg shadow-gray-600 "
          />
        </div>
        <div className=" text-center w-full my-5 ">
          <h1 className="text-2xl font-light">{name}</h1>
          <p className="font-extralight">{role}</p>
        </div>
        <div className="flex gap-4">
          {facebook ? (
            <Link to={facebook || '/'}>
              <FaFacebook
                className="changeBg"
                style={{ fontSize: '20px', color: '#004AAD' }}
              />
            </Link>
          ) : (
            ''
          )}

          {linkedin ? (
            <Link to={linkedin || '/'}>
              <FaLinkedin
                className="changeBg"
                style={{ fontSize: '20px', color: '#004AAD' }}
              />
            </Link>
          ) : (
            ''
          )}
          {github ? (
            <Link to={github || '/'}>
              <FaGithub
                className="changeBg"
                style={{ fontSize: '20px', color: '#004AAD' }}
              />
            </Link>
          ) : (
            ''
          )}
          {twitter ? (
            <Link to={github || '/'}>
              <FaTwitter
                className="changeBg"
                style={{ fontSize: '20px', color: '#004AAD' }}
              />
            </Link>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
};

export default TeamCard;
