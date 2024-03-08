import bonfire from '~/icons/bonfire 1.png';

function MainPollutants() {
  return (
    <>
      <>
        <div
          className="badge badge-lg text-xl  text-white font-light  px-[0.65em] pb-[0.8em] pt-[0.7em] mb-10"
          style={{ backgroundColor: '#FDA26B', borderColor: '#FDA26B' }}
        >
          Kilder til forurensning
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-10">
            <div className="flex row justify-center items-center">
              <h1 className="text-6xl rock-3d-logo ">1.</h1>
              <div className="flex flex-col justify-center items-center">
                <img src={bonfire} alt="" />
                <p>Vedfyring</p>
              </div>
            </div>
          </div>
          <div className="mb-10 ml-20">
            <div className="flex row justify-center items-center">
              <h1 className="text-6xl rock-3d-logo ">2.</h1>
              <div className="flex flex-col justify-center items-center">
                <img src={bonfire} alt="" />
                <p>Vedfyring</p>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <div className="flex row justify-center items-center">
              <h1 className="text-6xl rock-3d-logo ">3.</h1>
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
