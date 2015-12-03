var config = {
    lang: 'en-US',
    time: {
        timeFormat: 12
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: 'New+York,ny',
            units: 'imperial',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'en-US',
            APPID: '6966807698d715dba1ddbc5b397c963b'
        }
    },
    compliments: {
        interval: 30000,
        fadeInterval: 4000,
        morning: [
            'Good morning, handsome!',
            'Enjoy your day!',
            'Love yourself!',
            'How was your sleep?'
        ],
        afternoon: [
            'Hello, beauty!',
            'You look sexy!',
            'Your doing great!',
            'Looking good today!'
        ],
        evening: [
            'Wow, you look hot!',
            'You look nice!',
            'You did great today!',
            'Hi, sexy!'
        ]
    },
    calendar: {
        maximumEntries: 5
    },
    news: {
        feed: 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml'
    }
}
