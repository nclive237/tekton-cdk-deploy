FROM node:14

# Install AWS CDK
RUN npm install -g aws-cdk typescript

# Copy the CDK app code to the container
COPY ./app /app

WORKDIR /app

# Build the CDK app
RUN cdk synth

# Command to run when the container starts
CMD ["cdk", "deploy"]
