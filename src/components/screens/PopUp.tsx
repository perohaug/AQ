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
    handleResetPopup();
  }, [showPopup]);

  const handleClosePopup = () => {
    setShowPopup(false);
    localStorage.setItem('popupShown', 'true');
  };

  const handleResetPopup = () => {
    localStorage.removeItem('popupShown');
    setShowPopup(true);
  };

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
          <p className="font-ligt text-2xl pb-5">Hei!</p>
          <p className="text-xl font-light pb-5">
            Denne applikasjonen er utviklet som en del av et masterprosjekt ved NTNU. Prosjektet har blitt kalt
            "JegPuster", hvor formålet med prosjektet er å presentere luftkvalitetsdata på en måte som har fokus på
            estetikk og forståelse. Prosjektet henter luftkvalitetsdata fra åpne API-er, både nasjonalt og
            internasjonalt, og har hentet informajon på https://luftkvalitet.miljodirektoratet.no/.
          </p>
          <p className="text-xl font-light pb-5">
            Applikasjonen gir nåværende informasjon om luftkvaliteten, samtidig som den tilbyr dypere innsikt i luftens
            sammensetning og faktorer som påvirker kvaliteten.
          </p>
          <p className="text-xl font-light pb-5">
            {' '}
            Merk at merk at tipsene på denne siden er generelle råd, og at helsepersonell har mer omfattende kunnskap
          </p>
          <button
            onClick={handleClosePopup}
            className="text-xl font-light mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            style={{ backgroundColor: '#fb5607' }}
            data-modal-hide="popup"
          >
            Den er grei
          </button>
        </div>
      </div>
    </>
  );
};

export default Popup;
