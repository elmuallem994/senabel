import { Footer, Navbar } from '../components';
import { ContactPage } from '../components';

const contact = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <div className="relative">
      <ContactPage />
      <div className="gradient-15 z-0 lg:block hidden" />
    </div>
    <Footer />
  </div>
);

export default contact;
