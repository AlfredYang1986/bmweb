FROM ubuntu:18.04

RUN apt-get update && apt-get install -y && \
	apt-get upgrade -y && \
	apt-get install git -y && \
	apt-get install curl wget -y && apt-get install -y && \
	apt-get install gnupg -y && \
	apt-get clean

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash - && \
	apt-get install -y nodejs

ENV EMBERVERSION 2.18.2
ENV	BOWERVERSION 1.8.4

RUN npm update && \
	npm install -g ember-cli@${EMBERVERSION} && \
	npm install -g bower@${BOWERVERSION}

WORKDIR /cpp

RUN git clone https://github.com/AlfredYang1986/bmweb.git

WORKDIR bmweb

RUN npm install && \
	bower install foundation --allow-root

RUN ember b

EXPOSE 4200

ENTRYPOINT ["ember", "s"]
