interface ProfileProps {
  title: string;
  description: string;
  image: string;
  facts: {
    fact: string;
  }[]
}

export type { ProfileProps }