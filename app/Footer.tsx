function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" data-aos="fade-up" data-aos-duration="650">
      <div className="footer-inner">
        <p>© {year} Sangram.</p>
        <p>Available for freelance and full-time roles.</p>
      </div>
    </footer>
  );
}

export default Footer;
