import React, { useState, useEffect, useRef } from 'react';

const Popup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const popupShown = localStorage.getItem('popupShown');
    if (!popupShown) {
      setShowPopup(true);
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setShowPopup(false);
        localStorage.setItem('popupShown', 'true');
      }
    };

    if (showPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPopup]);

  const handleClosePopup = () => {
    setShowPopup(false);
    localStorage.setItem('popupShown', 'true');
  };

  //const handleResetPopup = () => {
  //localStorage.removeItem('popupShown'); // Remove the localStorage item to reset the popup
  // setShowPopup(true); // Show the popup again
  //};

  return (
    <>
      <div
        className={`fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center ${
          showPopup ? '' : 'hidden'
        }`}
        data-modal-target="popup"
      >
        <div
          ref={popupRef}
          id="popup"
          className="flex flex-col items-center text-center absolute bg-white rounded-2xl shadow-lg p-10"
          style={{ maxWidth: '500px' }}
        >
          <p className="font-bold text-2xl pb-5">Hei!</p>
          <p className="pb-5">
            Denne applikasjonen er utviklet som en del av et masterprosjekt ved NTNU. Prosjektet har blitt kalt
            "JegPuster", hvor formålet med prosjektet er å presentere luftkvalitetsdata på en måte som har fokus på
            estetikk og forståelse. Vi utforsker bruken av visualiseringer for å oppnå dette målet og samtidig vurdere
            graden av engasjement som applikasjonen genererer. Prosjektet henter luftkvalitetsdata fra åpne API-er, både
            nasjonalt og internasjonalt.
          </p>
          <p className="pb-5">
            Applikasjonen gir nåværende informasjon om luftkvaliteten, samtidig som den tilbyr dypere innsikt i luftens
            sammensetning og faktorer som påvirker kvaliteten.
          </p>
          <button
            onClick={handleClosePopup}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            style={{ backgroundColor: '#FC8861' }}
            data-modal-hide="popup"
          >
            Den er grei
          </button>
          {/**
           * <button onClick={handleResetPopup} className="mt-2 px-4 py-2 rounded-md hover:bg-gray-400">
            Reset Popup
          </button>
           */}
        </div>
      </div>
    </>
  );
};

export default Popup;
