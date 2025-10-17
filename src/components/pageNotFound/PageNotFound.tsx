import NavBar from '../Header/Navbar';

const PageNotFound = () => {
  return (
    <>
      <NavBar />
      <div
        style={{
          fontSize: '20px',
          fontWeight: '700',
          display: 'flex',
          justifyContent: 'center',
          height: '100vh',
          alignItems: 'center',
        }}
      >
        Oops Page not Found!!!!
      </div>
    </>
  );
};

export default PageNotFound;
