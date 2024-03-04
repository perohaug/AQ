function AqMessage() {
  var aqMessage = 'Luften er fantastisk, nyt dagen ute';
  var aqMessageColor = '#CFF9FB';

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '20px' }}>
          <svg width={80} height={80}>
            <circle cx={40} cy={40} r={40} fill={aqMessageColor} />
          </svg>
        </div>
        <div>
          <p className="font-light text-2xl">{aqMessage}</p>
        </div>
      </div>
    </div>
  );
}

export default AqMessage;
