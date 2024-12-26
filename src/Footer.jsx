function Footer(){

    const year = new Date().getFullYear();

    return (
        <footer>
            <p>&copy; {year} Classic Nova Codes</p>
        </footer>
    );
}

export default Footer;