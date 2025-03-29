type CardImage = {
  id: number;
  attributes: {
    name: string;
    url: string;
  };
};

type CardFilm = {
  id: number;
  attributes: {
    Title: string;
    Year: string;
    genere1: string;
    genere2: string;
    summary: string;
    FIlmContent: string;
    Rating: string;
    RunTime: string;
    ReleaseDate: string;
    Country: string;
    Language: string;
    Distribution: string;
    Co_Productions: boolean;
    ProductionsCompany: string;
    Sound_MIx: string;
    Aspect_Ratio: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    slug: string;
    CardImage: {
      data: CardImage;
    };
    ImgThumb: {
      data: CardImage;
    };
    TitleImage: {
      data: CardImage;
    };
  };
};

type MetaPagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

type Meta = {
  pagination: MetaPagination;
};

type ApiFilmCard = {
  data: CardFilm[];
  meta: Meta;
};

type Image = {
  id: number;
  attributes: {
    name: string;
    url: string;
  };
};

type Award = {
  id: number;
  AwardSponsers: string;
  Recipient: string;
  AwardTitle: string;
};

type Cast = {
  id: number;
  Name: string;
  Title: string;
  Image: {
    data: Image;
  };
};

type Crew = {
  id: number;
  Name: string;
  Title: string;
  Image: {
    data: Image;
  };
};

type Review = {
  id: number;
  Reviewer: string;
  ReviewContent: string;
};

type Video = {
  id: number;
  Title: string;
  FilmName: string;
  Views: string;
  ExternalUrl: string;
  ImgThumb: {
    data: Image;
  };
};

type Music = {
  id: number;
  Title: string;
  FilmName: string;
  Views: string;
  ExternalUrl: string | null;
  ImgThumb: {
    data: Image;
  };
};

type GalleryItem = {
  id: number;
  No: string;
  Image: {
    data: Image;
  };
};

type FilmData = {
  id: number;
  attributes: {
    Title: string;
    Year: string;
    genere1: string;
    genere2: string;
    summary: string;
    FilmContent: string;
    Rating: string;
    RunTime: string;
    ReleaseDate: string;
    Country: string;
    Language: string;
    Distribution: string;
    ProductionsCompany: string;
    Sound_MIx: string;
    Aspect_Ratio: string;
    createdAt: string;
    updatedAt: string;
    Trailer_url: string;
    MovieUrl: string;
    publishedAt: string;
    slug: string;
    CardImage: {
      data: Image;
    };
    TitleImage: {
      data: Image;
    };
    BannerImage: {
      data: Image[];
    };
    Awards: Award[];
    LeadCast: Cast[];
    LeadCrew: Crew[];
    Review: Review[];
    Videos: Video[];
    Music: Music[];
    Gallery: GalleryItem[];
  };
};

type ApiFilmData = {
  data: FilmData[];
  meta: Meta;
};

type VideoOrMusic = {
  id: number;
  Title: string;
  FilmName: string;
  Views: string;
  ExternalUrl: string;
  ImgThumb: {
    data: Image;
  };
};

type MediaData = {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Video: VideoOrMusic[];
    Music: VideoOrMusic[];
  };
};

type ApiTopMedia = {
  data: MediaData[];
  meta: Meta;
};

type SponserDetails = {
  id: number;
  AwardSponser: string;
  Details: {
    id: number;
    AwardRecipient: string;
    AwardTitle: string;
  }[];
};

type awardsData = {
  id: number;
  attributes: {
    movieName: string;
    Director: string;
    Year: string;
    IMD_rating: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    ImageThumb: {
      data: Image[];
    };
    Sponser: SponserDetails[];
  };
};

type AwardApiResponse = {
  data: awardsData[];
  meta: Meta;
};

type WorkData = {
  id: number;
  Tilte: string;
  Year: string;
  Rating: string;
  Image: {
    data: Image;
  };
};

type AwardDetails = {
  id: number;
  AwardRecipient: string;
  AwardTitle: string;
};

type Awardss = {
  id: number;
  Film_Title: string;
  Year: string;
  Details: AwardDetails[];
};

type DataAttributes = {
  Name: string;
  Biography: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Image: {
    data: Image;
  };
  ProfileImg: {
    data: Image;
  };
  Director: WorkData[];
  Actor: WorkData[];
  Cinematographer: WorkData[];
  Awards: Awardss[];
};

type PersonalApiResponse = {
  data: {
    id: number;
    attributes: DataAttributes;
  };
  meta: Meta;
};
