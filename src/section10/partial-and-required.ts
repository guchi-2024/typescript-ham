export{}

type Profile = {
  name: string;
  age: number;
  zipCode: number;
};


// Profileのプロパティは任意
type PartialType = Partial<Profile>;

type PropertyTypes = keyof Profile

type Optional<T> = {
  [P in keyof T]?: T[P];
};

type OptionalProfile = Optional<Profile>

// Profileのプロパティは必須
type RequiredType = Required<Profile>;





