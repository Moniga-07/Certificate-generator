import { certificateConfig } from "../config/certificateConfig";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import certificateTemplate from "../assets/templates/certificate-template.pdf";

export async function generateCertificate(certificateData) {
    const existingPdfBytes = await fetch(certificateTemplate).then((res) =>
        res.arrayBuffer()
    );

    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    const pages = pdfDoc.getPages();
    const page = pages[0];

    const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    const { width, height } = page.getSize();

    console.log("Page Size:", width, height);
    const participantName = certificateData.participantName;

    const participantNameWidth = font.widthOfTextAtSize(
        participantName,
        certificateConfig.participantName.fontSize
    );

    const participantNameX =
        (page.getWidth() - participantNameWidth) / 2;

    page.drawText(participantName, {
        x: participantNameX,
        y: certificateConfig.participantName.y,
        size: certificateConfig.participantName.fontSize,
        font,
        color: rgb(0, 0, 0),
    });

    const eventName = certificateData.eventName;

    const eventNameWidth = font.widthOfTextAtSize(
        eventName,
        certificateConfig.eventName.fontSize
    );

    const eventNameX =
        (page.getWidth() - eventNameWidth) / 2;

    page.drawText(eventName, {
        x: eventNameX,
        y: certificateConfig.eventName.y,
        size: certificateConfig.eventName.fontSize,
        font,
        color: rgb(0, 0, 0),
    });

    page.drawText(certificateData.issueDate, {
        x: certificateConfig.issueDate.x,
        y: certificateConfig.issueDate.y,
        size: certificateConfig.issueDate.fontSize,
        font,
        color: rgb(0, 0, 0),
    });

    const pdfBytes = await pdfDoc.save();

    const blob = new Blob([pdfBytes], {
        type: "application/pdf",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    const safeParticipant = certificateData.participantName.replace(/\s+/g, "_");

    const safeEvent = certificateData.eventName.replace(/\s+/g, "_");

    link.download =
        `${safeParticipant}_${safeEvent}_Certificate.pdf`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
}