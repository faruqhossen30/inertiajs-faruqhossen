import Header from './Header';
import Footer from './Footer';

export default function AppLayout({ children }) {
    return (
        <>
            <Header />
            <div className="container mx-auto">
            {children}
            </div>
            <Footer />
        </>
    );
}
