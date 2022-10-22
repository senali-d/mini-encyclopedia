interface ProfileProps {
  title: string;
  description: string;
  image: string;
  facts: {
    data: FactsProp[];
  };
}

interface FactsProp {
  fact: string;
}

export type { ProfileProps, FactsProp }