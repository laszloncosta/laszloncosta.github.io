import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ResearchInterests from '../components/ResearchInterests';
import LabsAffiliation from '../components/LabsAffiliation';
import ExperienceList from '../components/ExperienceList';
import TeachingList from '../components/TeachingList';
import PatentsList from '../components/PatentsList';
import PublicationsList from '../components/PublicationsList';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <ResearchInterests />
      <LabsAffiliation />
      <ExperienceList />
      <TeachingList />
      <PatentsList />
      <PublicationsList />
      <Footer />
    </main>
  );
}
