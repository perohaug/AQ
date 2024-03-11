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
    setExpanded({
      ...expanded,
      [particle]: !expanded[particle],
    });
  };

  return (
    <div>
      <div
        className="badge badge-lg text-xl  text-white font-light  px-[0.65em] pb-[0.8em] pt-[0.7em] mt-20 mb-10 ml-10"
        style={{ backgroundColor: '#192E54', borderColor: '#192E54' }}
      >
        Hva er i luften?
      </div>{' '}
      {/* First SVG */}
      <div className="flex items-center justify-start" onClick={() => handleExpand('particle1')}>
        <svg className="w-12 h-12" viewBox="0 0 70 70">
          <circle cx="35" cy="35" r="35" fill="#FF6C6C" />
        </svg>
        <p className="ml-2 font-md text-m mr-4 font-bold">Store partikler</p>
        {expanded.particle1 ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
            <path d="M12.9959 6.00035L6.74505 0.822213L0.553797 6.54292" stroke="black" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
            <path d="M13.4462 0.999647L7.25495 7.17779L1.00414 1.45708" stroke="black" />
          </svg>
        )}
      </div>
      {/* Description for the first SVG */}
      {expanded.particle1 && (
        <div className="mt-2 ml-12" style={{ maxWidth: '350px' }}>
          <p className="text-m">
            <b> Hovedkilde:</b> Hovedveier (Partikler fra dekk og asfalt)
          </p>
          <p className="text-m">
            <b>Effekt:</b> Disse partiklene blir ofte filtrert ut før de når de dypere delene av lungene.
          </p>
        </div>
      )}
      {/* Second SVG */}
      <div className="ml-2 flex items-center justify-start mt-5" onClick={() => handleExpand('particle2')}>
        <svg className="w-8 h-8" viewBox="0 0 70 70">
          <circle cx="35" cy="35" r="35" fill="#FF155C" />
        </svg>
        <p className="ml-2 text-m mr-4 font-bold">Små partikler</p>
        {expanded.particle2 ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
            <path d="M12.9959 6.00035L6.74505 0.822213L0.553797 6.54292" stroke="black" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
            <path d="M13.4462 0.999647L7.25495 7.17779L1.00414 1.45708" stroke="black" />
          </svg>
        )}
      </div>
      {/* Description for the second SVG */}
      {expanded.particle2 && (
        <div className="mt-2 ml-12" style={{ maxWidth: '350px' }}>
          <p className="text-m">
            <b> Hovedkilde:</b> Røyk fra vedfyring og eksos
          </p>
          <p className="text-m">
            <b>Effekt:</b> Disse partiklene blir i mindrer grad filtrert og har større evne til å trenge dypere inn i
            lungene
          </p>
        </div>
      )}
      {/* Third SVG */}
      <div className="ml-2 flex items-center justify-start mt-5" onClick={() => handleExpand('particle3')}>
        <svg className="w-8 h-8" viewBox="0 0 70 70">
          <defs>
            <filter id="blurFilter" x="0" y="0" width="100%" height="100%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
            </filter>
          </defs>
          <circle cx="35" cy="35" r="35" fill="#5A4858" filter="url(#blurFilter)" />
        </svg>
        <p className="ml-2 text-m mr-4 font-bold">Gasser</p>
        {expanded.particle3 ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
            <path d="M12.9959 6.00035L6.74505 0.822213L0.553797 6.54292" stroke="black" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
            <path d="M13.4462 0.999647L7.25495 7.17779L1.00414 1.45708" stroke="black" />
          </svg>
        )}
      </div>
      {/* Description for the third SVG */}
      {expanded.particle3 && (
        <div className="mt-2 ml-12 " style={{ maxWidth: '350px' }}>
          <p className="text-m">
            <b> Hovedkilde:</b> Veitrafikk
          </p>
          <p className="text-m">
            <b>Effekt:</b> Kortvarig eksponering for høye nivåer av NO2 kan føre til irritasjon i de øvre luftveiene
            (feks nese og svelg)
          </p>
        </div>
      )}
      {/* Fourth SVG */}
      <div className="ml-2 flex items-center justify-start mt-5" onClick={() => handleExpand('particle4')}>
        <svg className="w-8 h-8" viewBox="0 0 70 70">
          <defs>
            <filter id="blurFilter" x="0" y="0" width="100%" height="100%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
            </filter>
          </defs>
          <circle cx="35" cy="35" r="35" fill="#C1AA9D" filter="url(#blurFilter)" />
        </svg>
        <p className="ml-2 text-m mr-4 font-bold">Gasser</p>
        {expanded.particle4 ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
            <path d="M12.9959 6.00035L6.74505 0.822213L0.553797 6.54292" stroke="black" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
            <path d="M13.4462 0.999647L7.25495 7.17779L1.00414 1.45708" stroke="black" />
          </svg>
        )}
      </div>
      {/* Description for the fourth SVG */}
      {expanded.particle4 && <p className="mt-2 text-m ml-12">Langdistansetransport fra Europa</p>}
      {/* 
      <p className="text-m">
        <b>Alt i luften påvirker i ulik grad, men de mest sårbare gruppene er:</b> Barn, eldre, personer med eksisterende luftveissykdommer, personer med hjerte- og
        karsykdommer
      </p> */}
    </div>
  );
}

export default ParticleExplanation;
