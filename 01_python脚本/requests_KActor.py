import requests
import json
import io
import zipfile

uuid = "1003ffd4-cc6f-11ed-83c7-047c16178f58"
url = r"http://ubox.testplus.cn/api/report/e40280a0/original/files?caseId=" + uuid

resp = requests.get(url=url)
dicts = resp.json()
lists = dicts["data"]
result = [d for d in lists if d.get(
    'fileName') == 'KActorAnalyzerData.json.zip']
url = result[0]["downloadUrl"]
print(url)
resp = requests.get(url=url)
bytes = resp.content   # 获得bytes对象
file = io.BytesIO(bytes)    # 获得文件对象,这是zip能够识别的。
with zipfile.ZipFile(file) as myzipfile:
    filenamelists = myzipfile.namelist()   # 得到该zip内文件列表
    filename = filenamelists[0]   # 假设里面就只有一个文件，filename就是该文件名。
    with myzipfile.open(filename, 'r') as jsons:
        content = jsons.read().decode()  # 将二进制数据转换为str
        dicts = json.loads(content)  # 将str转换为dicts。

lists = dicts["data"]
for i in lists:
    print(i["frameIndex"],i)
    break