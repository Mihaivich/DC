import React from "react";

const GoogleMap = () => {
  // Get API key from environment variables
  const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  // Chicago Office coordinates: 2045 W Grand Ave, Chicago, IL
  const chicagoLat = 41.890574;
  const chicagoLng = -87.681302;

  // Dallas Office coordinates: 5473 Blair Rd, Dallas, TX
  const dallasLat = 32.8852625;
  const dallasLng = -96.7690827;

  return (
    <div className="w-full">
      <h3
        className="mb-4 font-medium text-lg md:text-xl"
        style={{ color: "#1a1a2e" }}
      >
        Our Office Locations
      </h3>

      {/* Office Locations Info */}
      <div className="mb-6 space-y-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-blue-600 mb-2">Chicago Office</h4>
          <p className="text-gray-700 text-sm">
            2045 W Grand Ave Ste B PMB 389997
            <br />
            Chicago, IL 60612-1577, USA
          </p>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${chicagoLat},${chicagoLng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Get Directions →
          </a>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-blue-600 mb-2">Dallas Office</h4>
          <p className="text-gray-700 text-sm">
            5473 Blair Rd Ste 100 PMB 389997
            <br />
            Dallas, TX 75231-4227, USA
          </p>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${dallasLat},${dallasLng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Get Directions →
          </a>
        </div>
      </div>

      {/* Individual location maps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="mb-2 font-medium text-gray-800">Chicago Office</h4>
          <div className="relative w-full h-48 rounded-lg overflow-hidden shadow-md">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${chicagoLat},${chicagoLng}&zoom=15`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chicago Office Location"
            ></iframe>
          </div>
        </div>

        <div>
          <h4 className="mb-2 font-medium text-gray-800">Dallas Office</h4>
          <div className="relative w-full h-48 rounded-lg overflow-hidden shadow-md">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${dallasLat},${dallasLng}&zoom=15`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dallas Office Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
