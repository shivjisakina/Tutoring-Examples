console.log("hello world");

// 10-2-2017

/*var process2 = process.argv[2]

console.log(process2)*/

var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'DsCvSwV5XGrwpfR3uMuAburHp',
    consumer_secret: 'TtYe84AecaZbwUgJxxYxRzZUR7NUHsYJ30VYdMCLGl2MZHBQAx',
    access_token_key: '875074148858507270-DkoNqSStBbmtyYQOb5whMabvYqJ2Gli',
    access_token_secret: 'Dn7o60NtXNBwoTmvDCU4IA4LAzig1BxhvtM4RpjXhorJV'
});

var params = {screen_name: 'nodejs', count: 3};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        //console.log(tweets[0].text);

        for (var i = 0; i < tweets.length; i++) {

            console.log(tweets[i].text)

        }
    }
});






