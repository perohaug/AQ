interface ParticleInfo {
  [key: string]: {
    name: string;
    color: string;
  };
}

export const particleInfo: ParticleInfo = {
  stor: {
    color: '#FF155C',
    name: 'Store partikler',
  },
  liten: {
    color: '#6d6a75',
    name: 'Små partikler',
  },
  gass1: {
    color: '#a57f60',
    name: 'Ozongass',
  },
  gass2: {
    color: '#ffffff',
    name: 'Nitrogengass',
  },
};
