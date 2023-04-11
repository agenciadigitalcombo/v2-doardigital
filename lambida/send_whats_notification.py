import json
import urllib3
import boto3

def lambda_handler(event, context):
    BEARER = '$2b$10$xOzFz.S3olQO3u1aLIsou.IIc1Gey7TkZrVUKZEE9lg8_0b6Doga2'
    url = "https://backz.digitalcombo.com.br/api/doardigital/send-message"
    hed = {
        'Authorization': 'Bearer ' + BEARER,
        'Content-Type': 'application/json'
    }
    PHONE = '55' + json.loads(event['body'])['phone']
    MESSAGE_WHATS = json.loads(event['body'])['message']   
    encoded_body = json.dumps({
        "phone": PHONE,
        "message": MESSAGE_WHATS,
    })
    http = urllib3.PoolManager()
    response = http.request('POST', url, headers=hed, body=encoded_body)
    return {
        'statusCode': 200,
        'body': response.data,
    }