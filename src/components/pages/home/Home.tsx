import AboutSection from '@components/sections/about';
import ClientsSection from '@components/sections/clients';
import ContactsSection from '@components/sections/contacts';
import MainSection from '@components/sections/main';

const Home = () => {
  return (
    <>
      <MainSection />
      <AboutSection />
      <ClientsSection />
      <ContactsSection />
    </>
  );
};

export default Home;
