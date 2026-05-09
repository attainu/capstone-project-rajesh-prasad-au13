// Select the database to use.
use('movies_app'); // Or whatever your database name is

// Insert data into movies collection
db.getCollection('movies').insertMany([
  {
    "adult": false,
    "backdrop_path": "/dUVbWINfRMGojGZRcO6GF1Z2nV8.jpg",
    "genre_ids": [
      12,
      14,
      28
    ],
    "id": 120,
    "original_language": "en",
    "original_title": "The Lord of the Rings: The Fellowship of the Ring",
    "overview": "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
    "popularity": 84.737,
    "poster_path": "/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    "release_date": "2001-12-18",
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "video": false,
    "vote_average": 8.396,
    "vote_count": 22579,
    "rating": 8
  },
  {
    "adult": false,
    "backdrop_path": "/YL3GPOiDcNraIJOVDCZsoOBoDy.jpg",
    "genre_ids": [
      878,
      28,
      12,
      53
    ],
    "id": 106,
    "original_language": "en",
    "original_title": "Predator",
    "overview": "A team of elite commandos on a secret mission in a Central American jungle come to find themselves hunted by an extraterrestrial warrior.",
    "popularity": 62.969,
    "poster_path": "/k3mW4qfJo6SKqe6laRyNGnbB9n5.jpg",
    "release_date": "1987-06-12",
    "title": "Predator",
    "video": false,
    "vote_average": 7.491,
    "vote_count": 6943,
    "rating": 6
  },
  {
    "adult": false,
    "backdrop_path": "/dqK9Hag1054tghRQSqLSfrkvQnA.jpg",
    "genre_ids": [
      18,
      28,
      80,
      53
    ],
    "id": 155,
    "original_language": "en",
    "original_title": "The Dark Knight",
    "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
    "popularity": 83.151,
    "poster_path": "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "release_date": "2008-07-14",
    "title": "The Dark Knight",
    "video": false,
    "vote_average": 8.509,
    "vote_count": 29582,
    "rating": 9
  },
  {
    "adult": false,
    "backdrop_path": "/yzqaKAhglTrkeOfuIXYYArf0WnA.jpg",
    "genre_ids": [
      16,
      10751
    ],
    "id": 12,
    "original_language": "en",
    "original_title": "Finding Nemo",
    "overview": "Nemo, an adventurous young clownfish, is unexpectedly taken from his Great Barrier Reef home to a dentist's office aquarium. It's up to his worrisome father Marlin and a friendly but forgetful fish Dory to bring Nemo home -- meeting vegetarian sharks, surfer dude turtles, hypnotic jellyfish, hungry seagulls, and more along the way.",
    "popularity": 94.545,
    "poster_path": "/5lc6nQc0VhWFYFbNv016xze8Jvy.jpg",
    "release_date": "2003-05-30",
    "title": "Finding Nemo",
    "video": false,
    "vote_average": 7.822,
    "vote_count": 17590,
    "rating": 8
  },
  {
    "adult": false,
    "backdrop_path": "/ysKahAEPP8h6MInuLjr0xuZOTjh.jpg",
    "genre_ids": [
      80,
      35
    ],
    "id": 107,
    "original_language": "en",
    "original_title": "Snatch",
    "overview": "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.",
    "popularity": 32.43,
    "poster_path": "/56mOJth6DJ6JhgoE2jtpilVqJO.jpg",
    "release_date": "2000-09-01",
    "title": "Snatch",
    "video": false,
    "vote_average": 7.803,
    "vote_count": 7985,
    "rating": 8
  },
  {
    "adult": false,
    "backdrop_path": "/8AE7M2lMsyvowfT36porzGtmOtI.jpg",
    "genre_ids": [
      878,
      18,
      10749
    ],
    "id": 38,
    "original_language": "en",
    "original_title": "Eternal Sunshine of the Spotless Mind",
    "overview": "Joel Barish, heartbroken that his girlfriend underwent a procedure to erase him from her memory, decides to do the same. However, as he watches his memories of her fade away, he realises that he still loves her, and may be too late to correct his mistake.",
    "popularity": 36.729,
    "poster_path": "/5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg",
    "release_date": "2004-03-19",
    "title": "Eternal Sunshine of the Spotless Mind",
    "video": false,
    "vote_average": 8.1,
    "vote_count": 13294,
    "rating": 9
  },
  {
    "adult": false,
    "backdrop_path": "/3h1JZGDhZ8nzxdgvkxha0qBqi05.jpg",
    "genre_ids": [
      35,
      18,
      10749
    ],
    "id": 13,
    "original_language": "en",
    "original_title": "Forrest Gump",
    "overview": "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
    "popularity": 62.225,
    "poster_path": "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    "release_date": "1994-06-23",
    "title": "Forrest Gump",
    "video": false,
    "vote_average": 8.5,
    "vote_count": 24536,
    "rating": 9
  },
  {
    "adult": false,
    "backdrop_path": "/xKb6mtdfI5Qsggc44Hr9CCUDvaj.jpg",
    "genre_ids": [
      28,
      53,
      878
    ],
    "id": 280,
    "original_language": "en",
    "original_title": "Terminator 2: Judgment Day",
    "overview": "Nearly 10 years have passed since Sarah Connor was targeted for termination by a cyborg from the future. Now her son, John, the future leader of the resistance, is the target for a newer, more deadly terminator. Once again, the resistance has managed to send a protector back to attempt to save John and his mother Sarah.",
    "popularity": 66.674,
    "poster_path": "/5M0j0B18abtBI5gi2RhfjjurTqb.jpg",
    "release_date": "1991-07-03",
    "title": "Terminator 2: Judgment Day",
    "video": false,
    "vote_average": 8.096,
    "vote_count": 11255,
    "rating": 8
  },
  {
    "adult": false,
    "backdrop_path": "/8bQbejOvAKe78RXxpkfM04n0K18.jpg",
    "genre_ids": [
      14,
      35
    ],
    "id": 310,
    "original_language": "en",
    "original_title": "Bruce Almighty",
    "overview": "Bruce Nolan toils as a 'human interest' television reporter in Buffalo, N.Y., but despite his high ratings and the love of his beautiful girlfriend, Bruce remains unfulfilled. At the end of the worst day in his life, he angrily ridicules God—and the Almighty responds, endowing Bruce with all of His divine powers.",
    "popularity": 35.483,
    "poster_path": "/f0QqG14SZYYZcV4VWykVc5w13dz.jpg",
    "release_date": "2003-05-23",
    "title": "Bruce Almighty",
    "video": false,
    "vote_average": 6.7,
    "vote_count": 9757,
    "rating": 8
  },
  {
    "adult": false,
    "backdrop_path": "/lt1rGQSqhk2T2T4lHo6CTQYvoWP.jpg",
    "genre_ids": [
      53,
      28,
      80
    ],
    "id": 187,
    "original_language": "en",
    "original_title": "Sin City",
    "overview": "Welcome to Sin City. This town beckons to the tough, the corrupt, the brokenhearted. Some call it dark… Hard-boiled. Then there are those who call it home — Crooked cops, sexy dames, desperate vigilantes. Some are seeking revenge, others lust after redemption, and then there are those hoping for a little of both. A universe of unlikely and reluctant heroes still trying to do the right thing in a city that refuses to care.",
    "popularity": 23.715,
    "poster_path": "/i66G50wATMmPrvpP95f0XP6ZdVS.jpg",
    "release_date": "2005-04-01",
    "title": "Sin City",
    "video": false,
    "vote_average": 7.437,
    "vote_count": 7311,
    "rating": 8
  },
  {
    "adult": false,
    "backdrop_path": "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    "genre_ids": [
      18,
      80
    ],
    "id": 238,
    "original_language": "en",
    "original_title": "The Godfather",
    "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    "popularity": 100.932,
    "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    "release_date": "1972-03-14",
    "title": "The Godfather",
    "video": false,
    "vote_average": 8.712,
    "vote_count": 17812,
    "rating": 9
  },
  {
    "adult": false,
    "backdrop_path": "/wOfzdzC0QZyhUIlyjeMuUYSb8Ax.jpg",
    "genre_ids": [
      18,
      10749
    ],
    "id": 289,
    "original_language": "en",
    "original_title": "Casablanca",
    "overview": "In Casablanca, Morocco in December 1941, a cynical American expatriate meets a former lover, with unforeseen complications.",
    "popularity": 17.927,
    "poster_path": "/5K7cOHoay2mZusSLezBOY0Qxh8a.jpg",
    "release_date": "1942-11-26",
    "title": "Casablanca",
    "video": false,
    "vote_average": 8.173,
    "vote_count": 4695,
    "rating": 8
  },
  {
    "adult": false,
    "backdrop_path": "/747dgDfL5d8esobk7h4odaOFhUq.jpg",
    "genre_ids": [
      80,
      18,
      53
    ],
    "id": 275,
    "original_language": "en",
    "original_title": "Fargo",
    "overview": "Jerry, a small-town Minnesota car salesman is bursting at the seams with debt... but he's got a plan. He's going to hire two thugs to kidnap his wife in a scheme to collect a hefty ransom from his wealthy father-in-law. It's going to be a snap and nobody's going to get hurt... until people start dying. Enter Police Chief Marge, a coffee-drinking, parka-wearing - and extremely pregnant - investigator who'll stop at nothing to get her man. And if you think her small-time investigative skills will give the crooks a run for their ransom... you betcha!",
    "popularity": 20.791,
    "poster_path": "/rt7cpEr1uP6RTZykBFhBTcRaKvG.jpg",
    "release_date": "1996-03-08",
    "title": "Fargo",
    "video": false,
    "vote_average": 7.87,
    "vote_count": 7007,
    "rating": 8
  },
  {
    "adult": false,
    "backdrop_path": "/bsaA9qtIR6VTDQykXdBzJc8V5rS.jpg",
    "genre_ids": [
      12,
      14,
      9648
    ],
    "id": 675,
    "original_language": "en",
    "original_title": "Harry Potter and the Order of the Phoenix",
    "overview": "Returning for his fifth year of study at Hogwarts, Harry is stunned to find that his warnings about the return of Lord Voldemort have been ignored. Left with no choice, Harry takes matters into his own hands, training a small group of students to defend themselves against the dark arts.",
    "popularity": 118.896,
    "poster_path": "/5aOyriWkPec0zUDxmHFP9qMmBaj.jpg",
    "release_date": "2007-06-28",
    "title": "Harry Potter and the Order of the Phoenix",
    "video": false,
    "vote_average": 7.687,
    "vote_count": 17658,
    "rating": 8
  },
  {
    "adult": false,
    "backdrop_path": "/r1gEZd7BoXtLNEQSNMqfsMlMtIz.jpg",
    "genre_ids": [
      12,
      28,
      18,
      53
    ],
    "id": 503,
    "original_language": "en",
    "original_title": "Poseidon",
    "overview": "A packed cruise ship traveling the Atlantic is hit and overturned by a massive wave, compelling the passengers to begin a dramatic fight for their lives.",
    "popularity": 22.847,
    "poster_path": "/cCx2Ead8KoZhHofsAAr7tyrjfDo.jpg",
    "release_date": "2006-05-10",
    "title": "Poseidon",
    "video": false,
    "vote_average": 5.848,
    "vote_count": 1890,
    "rating": 6
  },
  {
    "adult": false,
    "backdrop_path": "/eGhjeUbzttA3E4flxdAm8gHz4h4.jpg",
    "genre_ids": [
      28,
      12,
      10752
    ],
    "id": 1271,
    "original_language": "en",
    "original_title": "300",
    "overview": "Based on Frank Miller's graphic novel, \"300\" is very loosely based the 480 B.C. Battle of Thermopylae, where the King of Sparta led his army against the advancing Persians; the battle is said to have inspired all of Greece to band together against the Persians, and helped usher in the world's first democracy.",
    "popularity": 49.667,
    "poster_path": "/9W49fy5G7v9Ed3CXtvMi41YqZtt.jpg",
    "release_date": "2007-03-07",
    "title": "300",
    "video": false,
    "vote_average": 7.17,
    "vote_count": 12491,
    "rating": 8
  },
  {
    "adult": false,
    "backdrop_path": "/xvx4Yhf0DVb8G4LzNISpMfFBDy2.jpg",
    "genre_ids": [
      28,
      12,
      878
    ],
    "id": 12345,
    "original_language": "en",
    "original_title": "Interstellar",
    "overview": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "popularity": 150.5,
    "poster_path": "/gEU2QlsUUHXjNpebGcjTsyScrP5.jpg",
    "release_date": "2014-11-05",
    "title": "Interstellar",
    "video": false,
    "vote_average": 8.6,
    "vote_count": 28000
  }
]);

// Insert data into tvseries collection
db.getCollection('tvseries').insertMany([
  {
    "adult": false,
    "backdrop_path": "/2yZXtM2Kky1Sy0kachbDlwybl3y.jpg",
    "genre_ids": [
      10765,
      18,
      9648
    ],
    "id": 1705,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Fringe",
    "overview": "FBI Special Agent Olivia Dunham, brilliant but formerly institutionalized scientist Walter Bishop and his scheming, reluctant son Peter uncover a deadly mystery involving a series of unbelievable events and realize they may be a part of a larger, more disturbing pattern that blurs the line between science fiction and technology.",
    "popularity": 151.906,
    "poster_path": "/sY9hg5dLJ93RJOyKEiu1nAtBRND.jpg",
    "first_air_date": "2008-09-09",
    "name": "Fringe",
    "vote_average": 8.109,
    "vote_count": 2050,
    "rating": 9
  },
  {
    "adult": false,
    "backdrop_path": "/dGzPJnh8YcUS4J10sNunohaXMVn.jpg",
    "genre_ids": [
      37,
      80,
      18
    ],
    "id": 1406,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Deadwood",
    "overview": "The story of the early days of Deadwood, South Dakota; woven around actual historic events with most of the main characters based on real people. Deadwood starts as a gold mining camp and gradually turns from a lawless wild-west community into an organized wild-west civilized town. The story focuses on the real-life characters Seth Bullock and Al Swearengen.",
    "popularity": 42.61,
    "poster_path": "/4Yp35DVbVOAWkfQUIQ7pbh3u0aN.jpg",
    "first_air_date": "2004-03-21",
    "name": "Deadwood",
    "vote_average": 8.095,
    "vote_count": 670,
    "rating": 8
  },
  {
    "adult": false,
    "backdrop_path": "/cyieN1P9Xo5SvLasSUT7SaAAzfy.jpg",
    "genre_ids": [
      80,
      18
    ],
    "id": 1436,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Justified",
    "overview": "A character drama based on the 2001 Elmore Leonard short story \"Fire in the Hole.\" Leonard's tale centers around U.S. Marshal Raylan Givens of Kentucky, a quiet but strong-willed official of the law. The tale covers his high-stakes job, as well as his strained relationships with his ex-wife and father.",
    "popularity": 56.399,
    "poster_path": "/aVYuGDlOZMCRt89fAnHTYgk3BMr.jpg",
    "first_air_date": "2010-03-16",
    "name": "Justified",
    "vote_average": 7.961,
    "vote_count": 558,
    "rating": 8
  },
  {
    "adult": false,
    "backdrop_path": "/tMRdEsMg9MyXAkcufK9YJEeIaNW.jpg",
    "genre_ids": [
      35
    ],
    "id": 1400,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Seinfeld",
    "overview": "A stand-up comedian and his three offbeat friends weather the pitfalls and payoffs of life in New York City in the '90s. It's a show about nothing.",
    "popularity": 164.288,
    "poster_path": "/aCw8ONfyz3AhngVQa1E2Ss4KSUQ.jpg",
    "first_air_date": "1989-07-05",
    "name": "Seinfeld",
    "vote_average": 8.3,
    "vote_count": 1557,
    "rating": 9
  },
  {
    "adult": false,
    "backdrop_path": "/bsNm9z2TJfe0WO3RedPGWQ8mG1X.jpg",
    "genre_ids": [
      18,
      80
    ],
    "id": 1396,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Breaking Bad",
    "overview": "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
    "popularity": 292.904,
    "poster_path": "/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    "first_air_date": "2008-01-20",
    "name": "Breaking Bad",
    "vote_average": 8.878,
    "vote_count": 11548,
    "rating": 10
  },
  {
    "adult": false,
    "backdrop_path": "/sAX6JOWZWJGhkvFRctSZIL556mp.jpg",
    "genre_ids": [
      80,
      18
    ],
    "id": 1409,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Sons of Anarchy",
    "overview": "An adrenalized drama with darkly comedic undertones that explores a notorious outlaw motorcycle club’s (MC) desire to protect its livelihood while ensuring that their simple, sheltered town of Charming, California remains exactly that, charming. The MC must confront threats from drug dealers, corporate developers, and overzealous law officers. Behind the MC’s familial lifestyle and legally thriving automotive shop is a ruthless and illegal arms business driven by the seduction of money, power, and blood.",
    "popularity": 119.662,
    "poster_path": "/kiy8BHtIHAslh81rvFcZ4wbNGdY.jpg",
    "first_air_date": "2008-09-03",
    "name": "Sons of Anarchy",
    "vote_average": 8.442,
    "vote_count": 2437,
    "rating": 8.5
  },
  {
    "adult": false,
    "backdrop_path": "/r9t9lblyPfudl0LV0Ujg1nXdKyW.jpg",
    "genre_ids": [
      18,
      9648
    ],
    "id": 1408,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "House",
    "overview": "Dr. Gregory House, a drug-addicted, unconventional, misanthropic medical genius, leads a team of diagnosticians at the fictional Princeton–Plainsboro Teaching Hospital in New Jersey.",
    "popularity": 257.672,
    "poster_path": "/5rIQ3pTjWdZjNUJSJxn1T8MIvoG.jpg",
    "first_air_date": "2004-11-16",
    "name": "House",
    "vote_average": 8.607,
    "vote_count": 5450,
    "rating": 7.5
  },
  {
    "adult": false,
    "backdrop_path": "/8X1BTSaUyF5rc0malaaQovpxC3f.jpg",
    "genre_ids": [
      35
    ],
    "id": 1418,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "The Big Bang Theory",
    "overview": "The sitcom is centered on five characters living in Pasadena, California: roommates Leonard Hofstadter and Sheldon Cooper; Penny, a waitress and aspiring actress who lives across the hall; and Leonard and Sheldon's equally geeky and socially awkward friends and co-workers, mechanical engineer Howard Wolowitz and astrophysicist Raj Koothrappali. The geekiness and intellect of the four guys is contrasted for comic effect with Penny's social skills and common sense.",
    "popularity": 134.048,
    "poster_path": "/ooBGRQBdbGzBxAVfExiO8r7kloA.jpg",
    "first_air_date": "2007-09-24",
    "name": "The Big Bang Theory",
    "vote_average": 7.879,
    "vote_count": 9899,
    "rating": 7
  },
  {
    "adult": false,
    "backdrop_path": "/tK8eRUWVY8AVdDUPUxSzrmlLb0R.jpg",
    "genre_ids": [
      10765,
      10759,
      18
    ],
    "id": 5148,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Stargate Universe",
    "overview": "The adventures of a present-day, multinational exploration team traveling on the Ancient spaceship Destiny many billions of light years distant from the Milky Way Galaxy. They evacuated there and are now trying to figure out a way to return to Earth, while simultaneously trying to explore and to survive in their unknown area of the universe.",
    "popularity": 35.116,
    "poster_path": "/n23WMoa9y5TYPuKSQjPArpbHr9x.jpg",
    "first_air_date": "2009-10-02",
    "name": "Stargate Universe",
    "vote_average": 7.385,
    "vote_count": 577,
    "rating": 7.5
  },
  {
    "adult": false,
    "backdrop_path": "/x4lxFIhhrDI4nWtV8osnYwbGESV.jpg",
    "genre_ids": [
      35
    ],
    "id": 1421,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Modern Family",
    "overview": "The Pritchett-Dunphy-Tucker clan is a wonderfully large and blended family. They give us an honest and often hilarious look into the sometimes warm, sometimes twisted, embrace of the modern family.",
    "popularity": 231.798,
    "poster_path": "/fu5vEUHgxkAPmX26ISQXqHmlPMq.jpg",
    "first_air_date": "2009-09-23",
    "name": "Modern Family",
    "vote_average": 7.787,
    "vote_count": 2159,
    "rating": 9
  },
  {
    "adult": false,
    "backdrop_path": "/nVRyd8hlg0ZLxBn9RaI7mUMQLnz.jpg",
    "genre_ids": [
      18,
      9648,
      10765
    ],
    "id": 1622,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Supernatural",
    "overview": "When they were boys, Sam and Dean Winchester lost their mother to a mysterious and demonic supernatural force. Subsequently, their father raised them to be soldiers. He taught them about the paranormal evil that lives in the dark corners and on the back roads of America ... and he taught them how to kill it. Now, the Winchester brothers crisscross the country in their '67 Chevy Impala, battling every kind of supernatural threat they encounter along the way. ",
    "popularity": 361.403,
    "poster_path": "/KoYWXbnYuS3b0GyQPkbuexlVK9.jpg",
    "first_air_date": "2005-09-13",
    "name": "Supernatural",
    "vote_average": 8.304,
    "vote_count": 6650,
    "rating": 8
  },
  {
    "adult": false,
    "backdrop_path": "/1dQHZhnej0acyQn5jlVb8NHDMDM.jpg",
    "genre_ids": [
      18
    ],
    "id": 15621,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "The Newsroom",
    "overview": "A behind-the-scenes look at the people who make a nightly cable-news program. Focusing on a network anchor, his new executive producer, the newsroom staff and their boss, the series tracks their quixotic mission to do the news well in the face of corporate and commercial obstacles-not to mention their own personal entanglements.",
    "popularity": 22.784,
    "poster_path": "/2s6IPLtfw0GiMxlJznb1TkA6KXk.jpg",
    "first_air_date": "2012-06-24",
    "name": "The Newsroom",
    "vote_average": 8.119,
    "vote_count": 485,
    "rating": 8.5
  },
  {
    "adult": false,
    "backdrop_path": "/mCwQJqyuCFlbFyJR5sWg3PqtHEN.jpg",
    "genre_ids": [
      18,
      80
    ],
    "id": 40008,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Hannibal",
    "overview": "Both a gift and a curse, Graham has the extraordinary ability to think like his prey—he sees what they see, feels what they feel. But while Graham is pursuing an especially troubling, cannibalistic murderer, Special Agent Jack Crawford teams him with a highly respected psychiatrist – a man with a taste for the criminal minded – Dr. Hannibal Lecter.",
    "popularity": 55.286,
    "poster_path": "/imzvb941su6uhQ158GGurk7vF28.jpg",
    "first_air_date": "2013-04-04",
    "name": "Hannibal",
    "vote_average": 8.222,
    "vote_count": 2011,
    "rating": 9
  },
  {
    "adult": false,
    "backdrop_path": "/jBhcm0Rm5Uv1UaHt0TTWuRjG5G3.jpg",
    "genre_ids": [
      9648,
      10759
    ],
    "id": 4607,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Lost",
    "overview": "Stripped of everything, the survivors of a horrific plane crash  must work together to stay alive. But the island holds many secrets.",
    "popularity": 152.944,
    "poster_path": "/og6S0aTZU6YUJAbqxeKjCa3kY1E.jpg",
    "first_air_date": "2004-09-22",
    "name": "Lost",
    "vote_average": 7.968,
    "vote_count": 3428,
    "rating": 7.5
  },
  {
    "adult": false,
    "backdrop_path": "/2yDV0xLyqW88dn5qE7YCRnoYmfy.jpg",
    "genre_ids": [
      18,
      10768
    ],
    "id": 4613,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Band of Brothers",
    "overview": "Drawn from interviews with survivors of Easy Company, as well as their journals and letters, Band of Brothers chronicles the experiences of these men from paratrooper training in Georgia through the end of the war. As an elite rifle company parachuting into Normandy early on D-Day morning, participants in the Battle of the Bulge, and witness to the horrors of war, the men of Easy knew extraordinary bravery and extraordinary fear - and became the stuff of legend. Based on Stephen E. Ambrose's acclaimed book of the same name.",
    "popularity": 56.008,
    "poster_path": "/pGzV187ogXzgJrvPRy2YPi29ofH.jpg",
    "first_air_date": "2001-09-09",
    "name": "Band of Brothers",
    "vote_average": 8.457,
    "vote_count": 2956,
    "rating": 9
  },
  {
    "adult": false,
    "backdrop_path": "/ogZMFPQbkv4gGYjVt9vA35eTpee.jpg",
    "genre_ids": [
      80,
      18,
      35
    ],
    "id": 33400,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Terriers",
    "overview": "Ex-cop and recovering alcoholic Hank Dolworth partners with his best friend, former criminal Britt Pollack, in an unlicensed private investigation business. The series is set in Ocean Beach, San Diego, California, although it is portrayed as a distinct town, with Dolworth having once been a member of the fictional Ocean Beach Police Department.",
    "popularity": 8.858,
    "poster_path": "/51T6VEO74kijlt2SDowGiiq0Cti.jpg",
    "first_air_date": "2010-09-08",
    "name": "Terriers",
    "vote_average": 8.135,
    "vote_count": 78,
    "rating": 8
  },
  {
    "adult": false,
    "backdrop_path": "/gNYLylxp5EzopGtIb4XqIzbLtNJ.jpg",
    "genre_ids": [
      80,
      18
    ],
    "id": 1621,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Boardwalk Empire",
    "overview": "Atlantic City at the dawn of Prohibition is a place where the rules don't apply. And the man who runs things -- legally and otherwise -- is the town's treasurer, Enoch \"Nucky\" Thompson, who is equal parts politician and gangster.",
    "popularity": 32.102,
    "poster_path": "/kL6SqlVPpfAof2nQbh1VxkUuXBQ.jpg",
    "first_air_date": "2010-09-19",
    "name": "Boardwalk Empire",
    "vote_average": 8,
    "vote_count": 862,
    "rating": 8.5
  },
  {
    "adult": false,
    "backdrop_path": "/7sJrNKwzyJWnFPFpDL9wnZ859LZ.jpg",
    "genre_ids": [
      18,
      9648,
      80
    ],
    "id": 1415,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Elementary",
    "overview": "A modern-day drama about a crime-solving duo that cracks the NYPD's most impossible cases. Following his fall from grace in London and a stint in rehab, eccentric Sherlock escapes to Manhattan where his wealthy father forces him to live with his worst nightmare - a sober companion, Dr. Watson.",
    "popularity": 134.614,
    "poster_path": "/q9dObe29W4bDpgzUfOOH3ZnzDbR.jpg",
    "first_air_date": "2012-09-27",
    "name": "Elementary",
    "vote_average": 7.563,
    "vote_count": 1406,
    "rating": 7
  },
  {
    "adult": false,
    "backdrop_path": "/OylSdzVezjwGLYM0w73mUPNHM4.jpg",
    "genre_ids": [
      35
    ],
    "id": 18347,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Community",
    "overview": "Follow the lives of a group of students at what is possibly the world’s worst community college in the fictional locale of Greendale, Colorado.",
    "popularity": 75.864,
    "poster_path": "/3KUjDt8XY7w2Ku70UE0SECmv1zP.jpg",
    "first_air_date": "2009-09-17",
    "name": "Community",
    "vote_average": 7.957,
    "vote_count": 1327,
    "rating": 7.5
  },
  {
    "adult": false,
    "backdrop_path": "/qoauOMsZq2GXBxVj05Oga0IYPbX.jpg",
    "genre_ids": [
      35
    ],
    "id": 1422,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "The Middle",
    "overview": "The daily mishaps of a married woman and her semi-dysfunctional family and their attempts to survive life in general in the city of Orson, Indiana.",
    "popularity": 129.786,
    "poster_path": "/7YwLY7Fg9BJU9qu9rrwaYbIc77c.jpg",
    "first_air_date": "2009-09-30",
    "name": "The Middle",
    "vote_average": 7.546,
    "vote_count": 545,
    "rating": 7.5
  }
]);

// Insert data into trends collection
db.getCollection('trends').insertMany([
  {
    "id": 66732,
    "video": false,
    "adult": false,
    "backdrop_path": "/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
    "first_air_date": "2016-07-15",
    "release_date": "",
    "genre_ids": [18, 10765, 9648],
    "original_name": "Stranger Things",
    "name": "Stranger Things",
    "origin_country": ["US"],
    "original_language": "en",
    "overview": "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
    "popularity": 420.5,
    "poster_path": "/49WJfeN0moxb9IPfGn8x3qepAWP.jpg",
    "vote_average": 8.6,
    "vote_count": 12000,
    "media_type": "tv"
  }
]);

// Insert data into users collection
db.getCollection('users').insertMany([
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "hashed_password_123",
    "favorites": [
      {
        "id": 12345,
        "title": "Interstellar",
        "media_type": "movie"
      }
    ],
    "isActive": true
  }
]);

console.log("Sample data inserted successfully!");
