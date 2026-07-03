import { Link } from "react-router-dom";

function Home() {
    return (
        <div style={{ padding: "40px", textAlign: "center" }}>
            <h1>SIMMAM Certificate Generator</h1>

            <p>Select a module</p>

            <br />

            <Link to="/admin">
                <button>Admin Panel</button>
            </Link>

            <br />
            <br />

            <Link to="/certificates">
                <button>My Certificates</button>
            </Link>
        </div>
    );
}

export default Home;