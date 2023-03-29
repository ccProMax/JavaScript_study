import requests
import json
import io
import zipfile

url = r"http://ubox.testplus.cn/minio/e40280a0/1003ffd4-cc6f-11ed-83c7-047c16178f58/original/KActorAnalyzerData.json.zip"
resp = requests.get(url=url)
bytes = resp.content   # 获得bytes对象
file = io.BytesIO(bytes)    # 获得文件对象,这是zip能够识别的。
with zipfile.ZipFile(file) as myzipfile:
    filenamelists = myzipfile.namelist()   # 得到该zip内文件列表
    filename = filenamelists[0]   # 假设里面就只有一个文件，filename就是该文件名。
    with myzipfile.open(filename, 'r') as jsons:
        content = jsons.read().decode()  # 将二进制数据转换为字符串
        dicts = json.loads(content)
        print(dicts.keys())