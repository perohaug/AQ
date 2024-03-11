import { useState } from 'react';

type ExpandedState = {
  particle1: boolean;
  particle2: boolean;
  particle3: boolean;
  particle4: boolean;
};

function ParticleExplanation() {
  const [expanded, setExpanded] = useState({
    particle1: false,
    particle2: false,
    particle3: false,
    particle4: false,
  });

  const handleExpand = (particle: keyof ExpandedState) => {
    // Create a new object to hold the updated expanded state
    const newExpandedState: ExpandedState = {
      particle1: false,
      particle2: false,
      particle3: false,
      particle4: false,
    };

    // Set the clicked particle to true
    newExpandedState[particle] = !expanded[particle];

    // Update the expanded state
    setExpanded(newExpandedState);
  };

  return (
    <div>
      <div
        className="badge badge-lg text-xl  text-white font-light  px-[0.65em] pb-[0.8em] pt-[0.7em] mt-20 mb-10 ml-28"
        style={{ backgroundColor: '#192E54', borderColor: '#192E54' }}
      >
        Hva er i luften?
      </div>{' '}
      <div className="flex flex-row items-center ml-20">
        {/* First SVG */}
        <div
          className="flex items-center justify-start hover:scale-110 transition-transform duration-300"
          onClick={() => handleExpand('particle1')}
        >
          <svg className="w-12 h-12" viewBox="0 0 70 70">
            <circle cx="35" cy="35" r="35" fill="#FF6C6C" />
          </svg>
        </div>
        {/* Second SVG */}
        <div
          className="ml-16 flex items-center justify-start mt-5 hover:scale-110 transition-transform duration-300"
          onClick={() => handleExpand('particle2')}
        >
          <svg className="w-8 h-8" viewBox="0 0 70 70">
            <circle cx="35" cy="35" r="35" fill="#FF155C" />
          </svg>
        </div>
        {/* Third SVG */}
        <div
          className="ml-16 flex items-center justify-start hover:scale-110 transition-transform duration-300"
          onClick={() => handleExpand('particle3')}
        >
          <svg className="w-8 h-8" viewBox="0 0 70 70">
            <defs>
              <filter id="blurFilter" x="0" y="0" width="100%" height="100%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
              </filter>
            </defs>
            <circle cx="35" cy="35" r="35" fill="#5A4858" filter="url(#blurFilter)" />
          </svg>
        </div>
      </div>
      {/* Description for the first SVG */}
      {expanded.particle1 && (
        <div className="mt-2 ml-12" style={{ maxWidth: '350px' }}>
          <p className="font-md text-m font-bold mt-2 mb-5">Store partikler</p>
          <p className="text-m">
            <b> Hovedkilde:</b> Hovedveier (Partikler fra dekk og asfalt)
          </p>
          <p className="text-m">
            <b>Effekt:</b> Disse partiklene blir ofte filtrert ut før de når de dypere delene av lungene.
          </p>
        </div>
      )}
      {/* Description for the second SVG */}
      {expanded.particle2 && (
        <div className="mt-2 ml-12" style={{ maxWidth: '350px' }}>
          <p className="text-m font-bold mt-2 mb-5 ml-28">Små partikler</p>
          <p className="text-m">
            <b> Hovedkilde:</b> Røyk fra vedfyring og eksos
          </p>
          <p className="text-m">
            <b>Effekt:</b> Disse partiklene blir i mindrer grad filtrert og har større evne til å trenge dypere inn i
            lungene
          </p>
        </div>
      )}
      {/* Description for the third SVG */}
      {expanded.particle3 && (
        <div className="mt-2 ml-12" style={{ maxWidth: '350px' }}>
          <p className="text-m font-bold mb-5 ml-56">Gasser</p>
          <p className="text-m">
            <b> Hovedkilde:</b> Veitrafikk
          </p>
          <p className="text-m">
            <b>Effekt:</b> Kortvarig eksponering for høye nivåer av NO2 kan føre til irritasjon i de øvre luftveiene
            (feks nese og svelg)
          </p>
        </div>
      )}
    </div>
  );
}

export default ParticleExplanation;
