export default {
    menus: [
        {
            id: 'wods',
            name: 'Wods',
            color: "#f5428d"
        },
        {
            id: 'reservations',
            name: 'Rezervations',
            color: "#f54242"
        },
        {
            id: 'profile',
            name: 'Profile',
            color: "#f5a442"
        },
        {
            id: 'coaches',
            name: 'Coaches',
            color: "#368dff"
        }
    ],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    reservations: [
        {
            id: "monday",
            day: "Monday",
            wods: [
                {
                    hour: "06:30",
                    coach: "Mehmet Ali Can",
                    participantCount: 12
                },
                {
                    hour: "18:00",
                    coach: "Çağaş Kuru",
                    participantCount: 1
                },
                {
                    hour: "18:30",
                    coach: "İlyas Saykal",
                    participantCount: 12
                },
                {
                    hour: "19:00",
                    coach: "Çağaş Kuru",
                    participantCount: 12
                },
                {
                    hour: "20:00",
                    coach: "Çağrı İlaslan",
                    participantCount: 12
                },
                {
                    hour: "21:00",
                    coach: "Çağrı İlaslan",
                    participantCount: 12
                }
            ]
        },
        {
            id: "tuesday",
            day: "Tuesday",
            wods: []
        },
        {
            id: "wednesday",
            day: "Wednesday",
            wods: []
        },
        {
            id: "thursday",
            day: "Thursday",
            wods: []
        },
        {
            id: "friday",
            day: "Friday",
            wods: []
        },
        {
            id: "saturday",
            day: "Saturday",
            wods: []
        },
        {
            id: "sunday",
            day: "Sunday",
            wods: []
        }
    ],
    defaultFilmImg: "https://previews.123rf.com/images/chaotic245/chaotic2451805/chaotic245180500194/101926756-number-3-from-old-movie-count-down-three-film-countdown-number-vector-illustration.jpg"
}