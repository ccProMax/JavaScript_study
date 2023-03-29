import requests
import json


url = r'https://i0.hdslb.com/bfs/ai_subtitle/prod/44145249010655006863d8ee8a70accaa643e0792cb7f5ba4f1'
headers = {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36 Edg/89.0.774.75"
}
resp = requests.get(url=url, headers=headers)
# print(resp)
text = resp.text
dicts = resp.json()
# print(dicts)
zimu = dicts['body']
for i in zimu:
    print(i['content'])
