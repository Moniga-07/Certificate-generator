import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import certificateTemplate from "../assets/templates/certificate-template.pdf";

export async function generateCertificate(name, event, date) {
    try {
        // Load the template
        const existingPdfBytes = await fetch(certificateTemplate).then((res) =>
            res.arrayBuffer()
        );

        const pdfDoc = await PDFDocument.load(existingPdfBytes);

        const page = pdfDoc.getPages()[0];
        const { width, height } = page.getSize();

        console.log("Width:", width);
        console.log("Height:", height);

        alert(`Width: ${width}\nHeight: ${height}`);

        const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

        // ---------- NAME ----------
        page.drawText(name, {
            x: 300,
            y: 420,
            size: 22,
            font,
            color: rgb(0, 0, 0),
        });
        // ---------- EVENT ----------
        page.drawText(event, {
            x: 300,
            y: 360,
            size: 18,
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

        link.download = `${name}-certificate.pdf`;

        link.click();

        URL.revokeObjectURL(url);
    } catch (err) {
        console.error(err);
        alert("Certificate generation failed.");
    }
}