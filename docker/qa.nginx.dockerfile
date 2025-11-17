
FROM nginx:1.19.9

RUN apt-get update -y && apt-get install -y ssl-cert

COPY docker/conf/qa/nginx/nginx.conf /etc/nginx/nginx.conf
COPY docker/conf/qa/ssl/cert.pem /etc/ssl/navlungo.crt
COPY docker/conf/qa/ssl/key.pem /etc/ssl/navlungo.key
COPY docker/conf/qa/ssl/dhparam.pem /etc/nginx/dhparam.pem
