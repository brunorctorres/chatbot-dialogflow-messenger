FROM node:10-alpine
ENV HOME=/chatbot-troca-rapida
WORKDIR $HOME
COPY . $HOME
RUN npm install
# Rebuilding node-sass with no bin links tag before npm to make sass work in the project
# CMD npm rebuild node-sass --no-bin-links && npm start
CMD npm rebuild --no-bin-links && npm start