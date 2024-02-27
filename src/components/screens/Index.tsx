import { Dialog } from '@headlessui/react';
import { useRef, useState } from 'react';
import { useAuthState } from '~/components/contexts/UserContext';
import { SignInButton } from '~/components/domain/auth/SignInButton';
import { SignOutButton } from '~/components/domain/auth/SignOutButton';
import { Head } from '~/components/shared/Head';
import BouncingSVGElements from '~/components/lib/BouncingSVGElements';

function Index() {
  const { state } = useAuthState();
  const [isOpen, setIsOpen] = useState(true);
  const completeButtonRef = useRef(null);

  return (
    <>
      <Head title="TOP PAGE" />
      <div className="min-h-screen max-w-screen " style={{ backgroundColor: '#F2EBDF' }}>
        <div className="text-center items-center">
          <div className="p-8">
            <h1 className="text-9xl rock-3d-logo">
              JegPuster<b>Ikke</b>
            </h1>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ marginRight: '20px' }}>
                <svg width={100} height={100}>
                  <circle cx={50} cy={50} r={50} fill={'#CFF9FB'} />
                </svg>
              </div>
              <div>
                <p style={{ fontSize: '40px' }}>Luften er fantastisk, nyt dagen ute!</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center p-8">
            <div className="">
              <BouncingSVGElements containerId={'Hue'} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
