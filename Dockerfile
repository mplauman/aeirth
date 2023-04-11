FROM node:14-alpine3.10
WORKDIR /usr/app
COPY .babelrc ./
COPY package.json ./
COPY webpack.config.js ./
RUN npm install

# This docker image just sets up the various webpack, babel, and other tools
# used to compile the react code into static HTML. The actual source code is
# not included. In order to have this container do something useful you'll
# need to run it with a couple volumes:
# - one mounted to `/usr/app/src` containing the input source code
# - one mounted to `/usr/app/dist` that will receive the generated output
CMD ["npm", "run", "build"]

