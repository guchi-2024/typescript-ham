export{}

type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori' | 'Shiga';

type Covid19InfectionTnfo = {
  kanji_name: string;
  confirmed_cases: number;
};

const Covid19Japan: Record<Prefectures, Covid19InfectionTnfo> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
  Chiba: { kanji_name: '千葉', confirmed_cases: 246 },
  Tottori: { kanji_name: '鳥取', confirmed_cases: 10 },
  Shiga: { kanji_name: '滋賀', confirmed_cases: 20 },
}


