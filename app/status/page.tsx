export default function StatusPage() {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-[60vw] shadow-lg pt-8">
          <h1 className="text-2xl font-bold text-white mb-4">TROA Server Monitor Center</h1>
          <p className="text-white text-lg mb-6">
            The TROA Server Monitor Center is a centralized system for managing TROA's gaming servers. It ensures smooth operations through real-time monitoring, automated alerts, and resource allocation. Key features include performance tracking, backup management, plugin/mod oversight, and incident logging. It integrates with TROA's community tools to enhance communication and maintain a stable, enjoyable gaming experience, fostering trust and reliability within the gaming community.
          </p>
          <iframe
            src="https://status.therealmsofasgard.com/status/troa"
            className="w-full h-[190vh] rounded-md"
            title="Status - The Realms of Asgard"
            frameBorder="0"
          ></iframe>
        </div>
      </main>
    );
  }
  