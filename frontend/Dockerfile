FROM node:14.13.1-buster-slim

ARG PORT=19006
# ENV PORT $PORT
# EXPOSE $PORT 19001 19002
RUN npm i 
WORKDIR /app
COPY . .

ENTRYPOINT ["npm", "run"]
CMD ["web"]