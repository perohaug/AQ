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
        style={{ backgroundColor: '#FDA26B', borderColor: '#FDA26B' }}
      >
        Hva betyr sirklene?
      </div>{' '}
      {/* First SVG */}
      <div className="flex items-center justify-start " onClick={() => handleExpand('particle1')}>
        <svg className="w-12 h-12" viewBox="0 0 70 70">
          <circle cx="35" cy="35" r="35" fill="#FF6C6C" />
        </svg>
        <p className="ml-2 font-medium text-m mr-1">Store partikler</p>
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
        <div className="mt-2 ml-12">
          <p className="text-sm">
            <b> Stammer fra:</b> Hovedveier inkludert dekkpartikler og feiing av veier
          </p>
          <p className="text-sm">
            <b>Effekt:</b> Ikke alt trenger ned i lungene
          </p>
        </div>
      )}
      {/* Second SVG */}
      <div className="ml-2 flex items-center justify-start mt-5" onClick={() => handleExpand('particle2')}>
        <svg className="w-8 h-8" viewBox="0 0 70 70">
          <circle cx="35" cy="35" r="35" fill="#FF155C" />
        </svg>
        <p className="ml-2 font-medium text-m mr-1">Små partikler</p>
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
        <div className="mt-2 ml-12">
          <p className="text-sm">
            <b> Stammer fra:</b> Vedfyring og eksos
          </p>
          <p className="text-sm">
            <b>Effekt:</b> De fleste partiklene trenger ned i lungene
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
        <p className="ml-2 font-medium text-m mr-1">Gasser</p>
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
        <div className="mt-2 ml-12">
          <p className="text-sm">
            <b> Stammer fra:</b> Veitrafikk
          </p>
          <p className="text-sm">
            <b>Effekt:</b> Irriterer øverst i lungene
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
        <p className="ml-2 font-medium text-m mr-1">Gasser</p>
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
      {expanded.particle4 && <p className="mt-2 text-sm ml-12">Langdistansetransport fra Europa</p>}
    </div>
  );
}

export default ParticleExplanation;
