import "./App.css";

import { downloadCertificate } from "./services/certificateService";

function App() {

  async function handleDownload() {
    try {
      await downloadCertificate(101);
    } catch (error) {
      console.error(error);
      alert("Unable to download certificate. Please try again later.");
    }
  }

  return (

    <div
      style={{
        padding: 40,
        textAlign: "center"
      }}
    >

      <h1>SIMMAM Certificate Module</h1>

      <button
        onClick={handleDownload}
      >

        Download Certificate

      </button>

    </div>

  );

}

export default App;