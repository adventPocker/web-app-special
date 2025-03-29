
export const mockAwardsData: AwardApiResponse = {
  data: [
    {
      id: 1,
      attributes: {
        movieName: "The Last Journey",
        Director: "Sarah Johnson",
        Year: "2024",
        IMD_rating: "8.5",
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z",
        publishedAt: "2024-01-01T00:00:00.000Z",
        ImageThumb: {
          data: [
            {
              id: 1,
              attributes: {
                name: "award-thumb-1",
                url: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be",
              }
            }
          ]
        },
        Sponser: [
          {
            id: 1,
            AwardSponser: "International Film Academy",
            Details: [
              {
                id: 1,
                AwardRecipient: "Sarah Johnson",
                AwardTitle: "Best Director"
              },
              {
                id: 2,
                AwardRecipient: "Emma Thompson",
                AwardTitle: "Best Actress"
              }
            ]
          },
          {
            id: 2,
            AwardSponser: "Global Cinema Awards",
            Details: [
              {
                id: 3,
                AwardRecipient: "The Last Journey",
                AwardTitle: "Best Picture"
              }
            ]
          }
        ]
      }
    },
    {
      id: 2,
      attributes: {
        movieName: "Ocean's Whisper",
        Director: "Michael Lee",
        Year: "2024",
        IMD_rating: "9.0",
        createdAt: "2024-02-01T00:00:00.000Z",
        updatedAt: "2024-02-01T00:00:00.000Z",
        publishedAt: "2024-02-01T00:00:00.000Z",
        ImageThumb: {
          data: [
            {
              id: 2,
              attributes: {
                name: "award-thumb-2",
                url: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae",
              }
            }
          ]
        },
        Sponser: [
          {
            id: 3,
            AwardSponser: "Asian Film Awards",
            Details: [
              {
                id: 4,
                AwardRecipient: "Michael Lee",
                AwardTitle: "Best Director"
              }
            ]
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
      total: 2
    }
  }
}; 