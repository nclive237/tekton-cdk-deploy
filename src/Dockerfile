FROM node:lts-alpine

# Copy the CDK app code to the container
COPY ./app /app

WORKDIR /app

# Install AWS CDK
# RUN npm install -g aws-cdk typescript ts-node aws-cdk-lib
RUN npm install -g package.json

# Build the CDK app
RUN cdk synth

# Command to run when the container starts
CMD ["cdk", "deploy"]
