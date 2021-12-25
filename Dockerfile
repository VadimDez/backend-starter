FROM registry.access.redhat.com/ubi8/nodejs-14

# Change working directory
WORKDIR /opt/app-root/src/

# Install npm production packages
COPY package*.json /opt/app-root/src/
RUN cd /opt/app-root/src; npm ci

COPY . /opt/app-root/src/

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

CMD ["npm", "start"]
