import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import LabsAffiliation from '@/components/LabsAffiliation';
import NewsList from '@/components/NewsList';
import PublicationsList from '@/components/PublicationsList';
import ExperienceList from '@/components/ExperienceList';
import PatentsList from '@/components/PatentsList';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <ExperienceList />
      <PatentsList />
      <LabsAffiliation />
      <NewsList />
      <PublicationsList />
      <Footer />
    </main>
  );
}
