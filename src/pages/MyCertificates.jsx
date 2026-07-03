import { generateCertificate } from "../services/certificateService";
function MyCertificates() {
    const event = {
        eventName: "Coding Clash",
        registered: true,
        checkedIn: true,
    };

    const eligible = event.registered && event.checkedIn;

    return (
        <div style={{ padding: "40px" }}>
            <h1>My Certificates</h1>

            <hr />

            <h2>{event.eventName}</h2>

            <p>Registered: {event.registered ? "Yes" : "No"}</p>

            <p>Checked In: {event.checkedIn ? "Yes" : "No"}</p>

            <p>
                Certificate:
                {eligible ? " Eligible" : " Not Available"}
            </p>

            {eligible && (
                <button
                    onClick={() =>
                        generateCertificate(
                            "Moniga V",
                            "Coding Clash"
                        )
                    }
                >
                    Download Certificate
                </button>
            )}
        </div>
    );
}

export default MyCertificates;