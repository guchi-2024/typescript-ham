export{}

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
}

// 抽出
type PickProfile = Pick<DetailedProfile, 'name' | 'height' >

// 除外
type OmitProfile = Omit<DetailedProfile, 'height' | 'weight'>