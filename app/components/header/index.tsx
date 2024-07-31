import "./Style.css";
export default function Header() {
    return (
        <header className="main-header">
            <section className="header-content">
                <h1 className="logo">Park in Peace</h1>
                <nav className="main-nav">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </nav>
            </section>
        </header>
    );
}