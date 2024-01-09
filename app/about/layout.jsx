import AboutMenu from '@/components/aboutMenu/aboutMenu';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <AboutMenu />
      {children}
    </div>
  );
}

export const generateMetadata = () => {
  return {
    title: 'About Page',
    description: 'Information of ABC Company including President, crew info',
  };
};
