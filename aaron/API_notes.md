ID: AC0Z_nMc5zIFAVHXurlEeQ
client-secret:
8Ebk8gbhh0xFKHDf9bRRWimuY2RMivUBtgSM4iCMl7EuOxbkoCNv9Cu9Fnj5zXdt


Yelp Fusion API Key:
"access_token": "b295I9QQuhhjiY4UsniIpCOZ4LVNU6vAXnDc5dBFiOWGZhOU3PdvGvrAlB9MwOxteXqaOSyCloQZn9UyhEbnCwTBxMflazXJXOf6e3EBS4AndyG_tfY2n1QW_3WGWXYx",
"expires_in": 15551999,
"token_type": "Bearer"

To authenticate API calls with the access token, set the Authorization HTTP header value as Bearer ACCESS_TOKEN.

Initial API call will be a GET request
  GET https://api.yelp.com/v3/businesses/search
- Will return up to 1000 businesses

REQUIRED Parameters for query string
- location (string) OR longitude/latitude (decimal)

Likely useful but OPTIONAL
- radius (int) -- max size is 4000 meters/ 25 miles
- sort_by -- Sort the results by one of the these modes: best_match, rating, review_count or distance.
- price
- open_now

RESOURCES
-https://www.yelp.com/developers/documentation/v3/get_started
-https://www.yelp.com/developers/documentation/v3/business_search
-https://www.yelp.com/developers/documentation/v3/business_reviews
-https://www.yelp.com/developers/documentation/v3/business
-https://www.yelp.com/developers/documentation/v3/autocomplete
