import { Movie } from './types';

export const MOVIES: Movie[] = [
  {
    id: 1,
    title: 'Inception',
    description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    language: 'English',
    release_year: 2010,
    content_type: 'movie',
    duration_minutes: 148,
    age_rating: 'PG-13',
    poster_url: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    banner_url: 'https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg',
    trailer_url: 'https://www.youtube.com/embed/YoHD9XEInc0',
    genres: ['Action', 'Drama', 'Sci-Fi']
  },
  {
    id: 2,
    title: 'The Dark Knight',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    language: 'English',
    release_year: 2008,
    content_type: 'movie',
    duration_minutes: 152,
    age_rating: 'PG-13',
    poster_url: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    banner_url: 'https://image.tmdb.org/t/p/original/nMKdUUepR0i5zn0y1T4CejMk9No.jpg',
    trailer_url: 'https://www.youtube.com/embed/EXeTwQWrcwY',
    genres: ['Action', 'Thriller']
  },
  {
    id: 3,
    title: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    language: 'English',
    release_year: 2014,
    content_type: 'movie',
    duration_minutes: 169,
    age_rating: 'PG-13',
    poster_url: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    banner_url: 'https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg',
    trailer_url: 'https://www.youtube.com/embed/zSWdZVtXT7E',
    genres: ['Sci-Fi', 'Drama']
  },
  {
    id: 4,
    title: 'The Shawshank Redemption',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    language: 'English',
    release_year: 1994,
    content_type: 'movie',
    duration_minutes: 142,
    age_rating: 'R',
    poster_url: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    banner_url: 'https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg',
    trailer_url: 'https://www.youtube.com/embed/PLl99DlL6b4',
    genres: ['Drama']
  },
  {
    id: 5,
    title: 'Parasite',
    description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    language: 'Korean',
    release_year: 2019,
    content_type: 'movie',
    duration_minutes: 132,
    age_rating: 'R',
    poster_url: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    banner_url: 'https://image.tmdb.org/t/p/original/ApiBzeaa95TNYliSbQ8pJv4Nakl.jpg',
    trailer_url: 'https://www.youtube.com/embed/5xH0HfJHsaY',
    genres: ['Drama', 'Thriller']
  },
  {
    id: 6,
    title: 'Breaking Bad',
    description: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine to secure his family\'s future.',
    language: 'English',
    release_year: 2008,
    content_type: 'tv_show',
    age_rating: 'R',
    poster_url: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
    banner_url: 'https://image.tmdb.org/t/p/original/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg',
    trailer_url: 'https://www.youtube.com/embed/HhesaQXLuRY',
    genres: ['Drama', 'Thriller']
  },
  {
    id: 7,
    title: 'Squid Game',
    description: 'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games. Inside, a tempting prize awaits — with deadly high stakes.',
    language: 'Korean',
    release_year: 2021,
    content_type: 'tv_show',
    age_rating: 'R',
    poster_url: 'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg',
    banner_url: 'https://image.tmdb.org/t/p/original/qw3J9cNeLioOLoR68WX7z79aCdK.jpg',
    trailer_url: 'https://www.youtube.com/embed/oqxAJKy0ii4',
    genres: ['Thriller', 'Drama', 'Action']
  }
];

export const MOCK_CONTENT = [
  {
    id: 'hero-1',
    title: 'NEON DISSENT',
    description: 'In a city where memories are traded like currency, a rogue detective uncovers a conspiracy that threatens to erase the identity of every citizen.',
    banner_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkBZzL4Kh_nKjkY9cJyfNSlVXm0Y814IN3Vx-d77mIy1CUvbYzFUm0UASP8B7jQUjx_9xunkaGWCXFS1uQN0FHyjVExtottEcYxE_YMmojMVahNZW8UgOX4cqfnUuIK9s4ryit9ov9Hh_iA-f65z2BpF9gthCA-OAJWC4SEe0s6i9vWXeEY0O67lOBiCfMNbVPNOCEznTBhdjgBBhGHCFL1NHIHNDZ6BzZnacOkJBKX7GmB-RbdgbnyTx_3QKu1klHe8maCUa-MlDW',
    age_rating: 'PG-13',
    release_year: 2024,
    content_type: 'movie',
    genres: ['Sci-Fi', 'Action']
  },
  {
    id: 'trending-1',
    title: 'THE LAST REEL',
    poster_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlsMvu4rArB1Q_1H8gkJpN1yE6UkpT9BU0imJihzQpHj0aBwxln3u_wkKQNqHk3R68ToRHeWvtmNtxU9Vv9oK3fo1icwHfHegj869HHaFMAvrQpLw88ZsgL0utq21EDX17nUkIehDk4t1dm_9bJPAOMYytWmhjhkXtEZxDQGgDvKXtsTLCCYfuNni2ZlHdBGPRrlQrTEGMxMEsBrUk67E42CczMiZ0-hagi7oDlXp3IgdVQp3t39yPq655AAaU4BYlT4B3xSBMbcYy',
    genres: ['Drama'],
    release_year: 2024
  },
  {
    id: 'trending-2',
    title: 'SILENT ECHO',
    poster_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqen1mxHntmaUinXbq4WwV6DNmczDTzuXVDtGqNxTQhcsUeu32vRiBa8j7PnPiZq95wAEdHcg_Y26JGdEHry_oynduENu7AOy3MUwmJIcpydOx6Pdh3f4Y4Jed2f-JfRFg8d_OS7Qe-J95y08rGSR7wjZ7I3rRnrqUD2rjS2sQ-EO19UZHowHQzGvML4eEcvSGNsw7FZJ38bMgRC1bIvFcEXvwZOVOJCA7upaMFHuml9C0zcstwI4dLWCW-WWwi94emwJLYua4tCEm',
    genres: ['Thriller'],
    release_year: 2023
  },
  {
    id: 'trending-3',
    title: 'HORIZON LINE',
    poster_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4qulrGnjJDYKu1XnqD3zlZ9QOHXuhA6RZLNpG3Gn_BTJv4XpJwcHAJPEcsk54DUWC8ryGeGTcYQEUWd4VZECXtpDZl5StXqcpchDiOFRslTI1OL7ypPkt72614af6l3sHI6i2y3DvQ1KyRh5eVRQHrmbRfT1ba2ticQkoBwYbUDUBBjM9o3t8xPZVmevEGO0LsygLvW9naYqiUkfbSd_gdF6xQso7uuYr0vaguXf7h_NnnCfAc6_gX1srNxUO6DRHVEC_0OEYMCPh',
    genres: ['Adventure'],
    release_year: 2024
  },
  {
    id: 'trending-4',
    title: 'VOID RUNNER',
    poster_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBK-rKywdUG7yInEvBxL6dOD6o4bKPy7XdPFsKZs-PI64-tCP7rZmjABAYC_Oq0AyFuTci2DI29AxX2atWkcWV2kV3Nr8uIzjjYGzGP6_LSVePOsNqaexXCulWkwTVb9eWfgnvlQykOK2Uj4e9rXppqJWwmvQ2WorAe0bLuDOwAp7_Y79JN_somxogvy2UElP8bSyoY6pZauO-WapMs__XcglCYE2kHB5Rgd6HTI1gSpxgzkBsS7ClsipO4FLl8bG56k2plpoHenZNg',
    genres: ['Sci-Fi'],
    release_year: 2024
  },
  {
    id: 'trending-5',
    title: 'SHADOW WORK',
    poster_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjPBiW5QIuIQBTFq_6IVSUq7_7Ld6t-4E_xd7myQdVsbbt2xqqKgCw94cXZYgKa2Q-XcetHoaj-eIoU_GKyaLmj6kTvY4HmhgsoVZOCwg253lgfD2_mXrGTi8OsEVrYHJTWVcuHBsWAfgMIGBRq10ckI1W4_UedWLNn1umVqs3ZaPSf0q3TqIElN53yUEhH-kvoGys3R_80N_0LYrwhxjJpasFzLHSjWStl7WS4TJYxfUVSlW0-xQ9dkiyGl_PBTwSRMwm3J7Lw9-M',
    genres: ['Documentary'],
    release_year: 2023
  },
  {
    id: 'bento-1',
    title: 'BEYOND THE ABYSS',
    poster_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtq7RAKG2yoDBKoE0ySidWHmxNLGbAlheGN1XX-I6spLID0weosxxJhcjUHHuTd-o__DU07TvmclpUOH2W0Z5BslUIF555uFpd5T0Dmvh44NW8x4Qnv9WcmdyPM3AoNutZjuj_7hBNzZSfz3BAhHzf4Qb4_wXWJ7H785Z4aw7Np1he1hkixBL2SzEIOoHiB21-RzW4n8dEwP_JtRuHORqwiCRC8F06c26FxoeqwW5nn9s5WMC5YzVHPq_absIDksSPWr3JBJVFomHQ',
    genres: ['Sci-Fi', 'Explorer'],
    description: 'A team of deep-sea explorers discover an ancient city that shouldn\'t exist beneath the Antarctic ice.'
  },
  {
    id: 'bento-2',
    title: 'DUST RITUAL',
    poster_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDNJ62_G766b2p_JWP0Q0tfXo7cPqr9ZMBgZIbFTxBhUIDw8CKnrPjaY9b5025WGjfC1So54S4qUAclGQWUesUEqTWh2tOBVpQS6IrQQtKrdeONBJM6W1Qcp9T7p5Xwn_PRtdlo5TUXmlLMUbsMT3gaBG9OUy5v-AF9DDC2uNuemYitWVOUE5iOaU4MnIHODL3rLOgN43Pl_-1NphQ537H0MElnwUrOirATKsePbKb9TQLUzmhMoFtxVeEExQf1QB7wYzRwQdQ2LJo'
  },
  {
    id: 'bento-3',
    title: 'IRON THRONE',
    poster_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6dnI6msb4Ya22liSk5kk_01zADk4l8SXTIeZY4Rvq46_7ms4CwyxBAFTQgnBRQ2Q3WVsYVhyssnFa7AXL7kjwQxmV5PNJTEOH1ME-4t714eMkSiVj6AP7BupQkPvbBYMNm4teVWr9NW46rmboQFfxOoAdrnWkbz0uMqmIKj6q24oI038Vakc6-YFm2s0rnbRjWg7XP_nXqxODKX_lusU5664lHvvc03uF0EcF1sPD0C1RNmNd1-44Nkgw9HKmI6B0Sg2wBXLW_YL5'
  },
  {
    id: 'bento-4',
    title: 'OVERDRIVE',
    poster_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlafMdr3wVhA6GJhe7PPVfFl3ptS8Eto68jo3B34fX7ixd4hAz024qVXsEnZCVY5_gLmXTsFJSb6r6O7NzhERc_sRYfgXawcCdpsmD2Bg5TL-O9sSQY773YzRLaCwVZ41JZjDRqLiipi03wQNvqVZtuLYFIMKCBmfDFc9xnTE51iY4SNFlyfRTAgCJubfMYItexk0JOeSl1BIx4Q6zcPEMGHkWtmXDbzvJO5pewgzckvFKhrsqjHJn6gX9ULqBdd9Haba0Jols7AKa'
  },
  {
    id: 'bento-5',
    title: 'CIPHER',
    poster_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkrmKEYwibDn7FelagsmiwGURf5cXu_EugkTuaLNuwsHSPyaay6u_gWp0iLyBDwl5_sww_7m5s6dvS3b8EAu-VmOVn14paTOJ0o4wbTnz3MF-B8-A_vewMv13Plk7BDnLU41Zx6LXKQADlAiK3F4COMzo5XuuXt1yl8x8wzPWyXKLFQaq-gR3eyXFhtkSexXaGs4DUP1ZpqIbwm-hCfxuYf8RLDQ2wZZzz5N4UKmZHLNTOzfc2dHjldTdy5BNKvYRNIjj31mRilBI-'
  }
];
