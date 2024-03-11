import bonfire from '~/icons/bonfire 1.png';

function MainPollutants() {
  return (
    <>
      <>
        <div
          className="badge badge-lg text-xl  text-white font-light  px-[0.65em] pb-[0.8em] pt-[0.7em] mb-10 mt-10"
          style={{ backgroundColor: '#192E54', borderColor: '#192E54' }}
        >
          Dette forurenser luften nå
        </div>
        <div className="flex items-center">
          <div>
            <div className="flex row justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <img src={bonfire} alt="" />
                <p>Vedfyring</p>
              </div>
            </div>
          </div>
          <div className=" ml-20">
            <div className="flex row justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <img src={bonfire} alt="" />
                <p>Vedfyring</p>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default MainPollutants;
