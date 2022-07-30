from pprint import pprint
import instagram_scraper

args = {"login_user": "mk_retired_developer", "login_pass": "TCPmIPhProtocol1_"}

insta_scraper = instagram_scraper.InstagramScraper(**args)
insta_scraper.authenticate_with_login()
insta_scraper.query_followings_gen()
print(insta_scraper.get_profile_pic(insta_scraper.get_dst_dir("mk_retired_developer"), username="mk_retired_developer"))
print(insta_scraper.get_profile_info(insta_scraper.get_dst_dir("mk_retired_developer"), username="mk_retired_developer"))
shared_data = insta_scraper.get_shared_data_userinfo(username='mk_retired_developer')
# arr = []

# for item in insta_scraper.query_media_gen(shared_data):
#     arr.append(item)

# pprint(arr)