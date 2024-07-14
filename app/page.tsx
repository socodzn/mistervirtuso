import Header from "./header/header";
import Footer from "./footer/page"
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
    
    <Header />
      <div
      style={{
        backgroundImage: 'url(/mv_background.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        position: 'relative', // Important for positioning text
      }}
    >
      <p
        style={{
          position: 'absolute',
          top: '20%', // Adjust as needed
          left: '50%', // Adjust as needed
          transform: 'translate(-50%, -50%)', // Center the text
          color: '#67ce7a', // Text color
          fontSize: '60px', // Font size,
          fontFamily: 'Libre Caslon Display, serif', // font-famiy
          whiteSpace: 'nowrap'
        }}
      >
        mister virtùso
      </p>

      </div>
      < Footer />
    </main>
  );
}
