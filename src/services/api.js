const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function getCertificate(eventId) {

    // ----------------------------
    // MOCK DATA (Development)
    // ----------------------------
    return {
        success: true,
        data: {
            certificateId: 1,

            participant: {
                id: 101,
                name: "Moniga V",
                email: "moniga@example.com",
            },

            event: {
                id: eventId,
                title: "AI ART BATTLE",
            },

            certificate: {
                issueDate: "10/07/2026",
            },
        },
    };

    /*
    ----------------------------
    REAL API (Enable Later)
    ----------------------------
  
    const response = await fetch(
      `${API_BASE_URL}/certificate/${eventId}`,
      {
        credentials: "include",
      }
    );
  
    return await response.json();
  
    */
}