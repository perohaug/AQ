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
    // Toggle the expanded state for the clicked particle
    setExpanded((prevState) => ({
      particle1: particle === 'particle1' ? !prevState.particle1 : false,
      particle2: particle === 'particle2' ? !prevState.particle2 : false,
      particle3: particle === 'particle3' ? !prevState.particle3 : false,
      particle4: particle === 'particle4' ? !prevState.particle4 : false,
    }));
  };

  return (
    <div>
      <div
        className="badge badge-lg text-xl text-white font-light px-[0.65em] pb-[0.8em] pt-[0.7em] mt-10 mb-10 ml-48"
        style={{ backgroundColor: '#192E54', borderColor: '#192E54' }}
      >
        Hva er i luften?
      </div>{' '}
      <div className="flex flex-row items-center ml-12">
        {/* First SVG */}
        <div
          className="flex flex-col items-center justify-start hover:scale-110 transition-transform duration-300"
          onClick={() => handleExpand('particle1')}
        >
          <svg className="mb-3 w-20 h-20" viewBox="0 0 70 70">
            <circle cx="35" cy="35" r="35" fill="#FF6C6C" />
          </svg>
          <p>{expanded.particle1 ? <b>Store partikler</b> : 'Store partikler'}</p>
        </div>
        {/* Second SVG */}
        <div
          className="ml-16 flex flex-col items-center justify-start mt-5 hover:scale-110 transition-transform duration-300"
          onClick={() => handleExpand('particle2')}
        >
          <svg className="mb-3  w-10 h-10" viewBox="0 0 70 70">
            <circle cx="35" cy="35" r="35" fill="#FF155C" />
          </svg>
          <p>{expanded.particle2 ? <b>Små partikler</b> : 'Små partikler'}</p>
        </div>
        {/* Third SVG */}
        <div
          className="ml-16 flex flex-col items-center justify-start hover:scale-110 transition-transform duration-300"
          onClick={() => handleExpand('particle3')}
        >
          <svg className="mb-3 w-12 h-12" viewBox="0 0 70 70">
            <circle cx="35" cy="35" r="35" fill="#5A4858" />
          </svg>
          <p>{expanded.particle3 ? <b>Gasser</b> : 'Gasser'}</p>
        </div>
      </div>
      {/* Description for the first SVG */}
      {expanded.particle1 && (
        <div className="mt-10 ml-12 text-center" style={{ maxWidth: '350px' }}>
          <p className="text-m mb-3">
            Hovedkilde er <b>hovedveier</b>, inkludert partikler fra dekk og asfalt
          </p>
          <p className="text-m">Disse partiklene blir ofte filtrert ut før de når de dypere delene av lungene.</p>
        </div>
      )}
      {/* Description for the second SVG */}
      {expanded.particle2 && (
        <div className="mt-10 ml-12 text-center" style={{ maxWidth: '350px' }}>
          <p className="text-m mb-3">
            Hovedkilde er <b>røyk fra vedfyring og eksos</b>
          </p>
          <p className="text-m">
            Disse partiklene blir i mindre grad filtrert og har større evne til å trenge dypere inn i lungene
          </p>
        </div>
      )}
      {/* Description for the third SVG */}
      {expanded.particle3 && (
        <div className="mt-10 ml-12 text-center" style={{ maxWidth: '350px' }}>
          <p className="text-m mb-3">
            Hovedkilde er <b>veitrafikk</b>
          </p>
          <p className="text-m">
            Kortvarig eksponering for høye nivåer av gasser kan føre til irritasjon i de øvre luftveiene (feks nese og
            svelg)
          </p>
        </div>
      )}
    </div>
  );
}

export default ParticleExplanation;
