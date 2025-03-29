export const mockTopMediaData: ApiTopMedia = {
  data: [
    {
      id: 1,
      attributes: {
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z",
        publishedAt: "2024-01-01T00:00:00.000Z",
        Video: [
          {
            id: 1,
            Title: "Behind the Scenes - The Last Journey",
            FilmName: "The Last Journey",
            Views: "150K",
            ExternalUrl: "https://www.youtube.com/watch?v=example1",
            ImgThumb: {
              data: {
                id: 1,
                attributes: {
                  name: "video-thumb-1",
                  url: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300",
                }
              }
            }
          },
          {
            id: 2,
            Title: "Making of Ocean's Whisper",
            FilmName: "Ocean's Whisper",
            Views: "100K",
            ExternalUrl: "https://www.youtube.com/watch?v=example2",
            ImgThumb: {
              data: {
                id: 2,
                attributes: {
                  name: "video-thumb-2",
                  url: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=300",
                }
              }
            }
          }
        ],
        Music: [
          {
            id: 1,
            Title: "Journey's Theme",
            FilmName: "The Last Journey",
            Views: "200K",
            ExternalUrl: "https://www.youtube.com/watch?v=example3",
            ImgThumb: {
              data: {
                id: 3,
                attributes: {
                  name: "music-thumb-1",
                  url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300",
                }
              }
            }
          },
          {
            id: 2,
            Title: "Ocean's Lullaby",
            FilmName: "Ocean's Whisper",
            Views: "180K",
            ExternalUrl: "https://www.youtube.com/watch?v=example4",
            ImgThumb: {
              data: {
                id: 4,
                attributes: {
                  name: "music-thumb-2",
                  url: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300",
                }
              }
            }
          }
        ]
      }
    }
  ],
  meta: {
    pagination: {
      page: 1,
      pageSize: 25,
      pageCount: 1,
      total: 1
    }
  }
}; 