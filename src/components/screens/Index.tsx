import { Dialog } from '@headlessui/react';
import { useRef, useState } from 'react';
import { useAuthState } from '~/components/contexts/UserContext';
import { SignInButton } from '~/components/domain/auth/SignInButton';
import { SignOutButton } from '~/components/domain/auth/SignOutButton';
import { Head } from '~/components/shared/Head';
import BouncingSVGElements from '~/components/lib/BouncingSVGElements';
import couple from '~/Icons/couple.png';
import { spacing } from 'react-select/dist/declarations/src/theme';

function Index() {
  const { state } = useAuthState();
  const [isOpen, setIsOpen] = useState(true);
  const completeButtonRef = useRef(null);

  return (
    <>
      <Head title="TOP PAGE" />
      <div className="min-h-screen max-w-screen " style={{ backgroundColor: '#F2EBDF' }}>
        <div className="text-center items-center">
          <div className="p-8" style={{ display: 'flex', justifyContent: 'center' }}>
            <h1 className="text-9xl rock-3d-logo">JegPuster</h1>
            <h1 style={{ marginTop: '60px', fontSize: '50px' }}>i Trondheim</h1>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button className="btn btn-outline">NÅ</button>
            <button className="btn btn-ghost">DEN SISTE UKEN</button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ marginRight: '20px' }}>
                <svg width={80} height={80}>
                  <circle cx={40} cy={40} r={40} fill={'#CFF9FB'} />
                </svg>
              </div>
              <div>
                <p style={{ fontSize: '30px' }}>Luften er fantastisk, nyt dagen ute!</p>
              </div>
            </div>
          </div>
          <div className="badge badge-neutral">Den generelle befolkningen</div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '20px',
              marginBottom: '20px',
            }}
          >
            <img style={{ height: '60px', marginRight: '10px' }} src={couple} alt="My Image" />
            <img style={{ height: '60px', marginRight: '10px' }} src={couple} alt="My Image" />
            <img style={{ height: '60px', marginRight: '10px' }} src={couple} alt="My Image" />
            <img style={{ height: '60px', marginRight: '10px' }} src={couple} alt="My Image" />
            <img style={{ height: '60px', marginRight: '10px' }} src={couple} alt="My Image" />
            <img style={{ height: '60px', marginRight: '10px' }} src={couple} alt="My Image" />
            <img style={{ height: '60px', marginRight: '10px' }} src={couple} alt="My Image" />
          </div>
          <svg width="100%" height="120" viewBox="0 0 971 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 21.3395C14.7308 20.8121 27.1712 18.9061 40.5763 17.434C73.1525 13.8567 106.223 11.9599 141.86 11.3078C163.071 10.9196 186.729 10.7025 207.6 11.997C231.102 13.4548 250.357 17.8194 269.565 21.1864C310.739 28.4037 346.358 28.2253 394.754 24.3261C445.395 20.246 494.859 13.4466 547.937 11.4227C581.849 10.1295 613.314 11.2311 647.019 11.997C664.579 12.396 682.052 12.3973 699.391 11.4992C725.247 10.1599 745.374 6.42502 769.377 4.03285C812.32 -0.246947 847.043 2.97983 887.488 6.82796C915.174 9.46213 943.833 11.5079 971 14.4475"
              stroke="#CFF9FB"
              stroke-width="3"
              stroke-linecap="round"
            />
            <path
              d="M0 27.3164C61.7049 26.833 122.492 24.1025 184.065 23.312C223.068 22.8113 266.64 22.3905 302.906 26.4475C324.839 28.901 337.996 33.4641 352.437 37.7428C368.83 42.5995 388.442 49.3875 416.843 50.6624C461.362 52.6608 510.305 45.2869 549.416 41.6715C637.665 33.514 691.234 24.5965 785 24.5965C811.74 24.5965 872.222 31.7714 897.603 29.6208C922.067 27.5478 945.455 25.7771 971 24.5965"
              stroke="#CFF9FB"
              stroke-width="3"
              stroke-linecap="round"
            />
            <path
              d="M0 41C74.2631 34.3085 118.278 12.3886 198.516 8.76696C244.951 6.67103 297.682 10.8628 342.624 13.2353C411.907 16.8927 481.863 20.7667 552.699 21.981C594.389 22.6956 632.801 21.6666 672.302 18.1619C710.569 14.7667 745.813 9.61184 785.585 7.23933C829.714 4.60691 866.937 6.16012 905.65 11.975C927.821 15.3051 948.58 19.1986 971 22.4393"
              stroke="#CFF9FB"
              stroke-width="3"
              stroke-linecap="round"
            />
            <path
              d="M0 45.2099C33.6005 45.2099 67.2009 45.2099 100.801 45.2099C131.802 45.2099 162.804 45.1879 193.804 45.2099C220.548 45.2289 248.969 44.7796 274.965 46.7928C322.425 50.4681 356.359 59.9146 409.271 58.9283C447.293 58.2195 480.743 53.5202 515.127 49.6947C549.967 45.8185 585.794 42.3561 623.293 40.725C673.352 38.5478 725.232 39.1045 775.795 39.1045C799.644 39.1045 823.738 38.846 847.569 39.1422C887.178 39.6344 928.168 40.4696 967 42.4964"
              stroke="#CFF9FB"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>

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
