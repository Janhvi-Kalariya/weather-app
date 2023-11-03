function Footer(){

    const d = new Date();
    const year = d.getFullYear();
    return(
        <footer className="footer">
            <h4>&copy; {year}.&nbsp; Made by Janhvi Kalariya</h4>
        </footer>
    );
}

export default Footer;