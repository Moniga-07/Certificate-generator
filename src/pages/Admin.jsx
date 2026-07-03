import { useState } from "react";
import { generateCertificate } from "../services/certificateService";

function Admin() {
    const [name, setName] = useState("");
    const [event, setEvent] = useState("");
    const [date, setDate] = useState("");

    const handleGenerate = () => {
        if (!name || !event || !date) {
            alert("Please fill all fields");
            return;
        }

        generateCertificate(name, event, date);
    };

    return (
        <div style={{ padding: "40px" }}>
            <h1>Admin Panel</h1>

            <br />

            <input
                type="text"
                placeholder="Participant Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Event Name"
                value={event}
                onChange={(e) => setEvent(e.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Certificate Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />

            <br /><br />

            <button onClick={handleGenerate}>
                Generate Certificate
            </button>
        </div>
    );
}

export default Admin;