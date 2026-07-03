import { getCertificate } from "./api";
import { generateCertificate } from "../utils/pdfGenerator";

export async function downloadCertificate(eventId) {

    const response = await getCertificate(eventId);

    if (!response.success) {
        throw new Error("Unable to fetch certificate");
    }

    const certificateData = {
        participantName:
            response.data.participant?.name || "Participant",

        eventName:
            response.data.event?.title || "Event",

        issueDate:
            response.data.certificate?.issueDate || "",
    };

    await generateCertificate(certificateData);
}