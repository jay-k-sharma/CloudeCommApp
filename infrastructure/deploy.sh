#!/bin/bash

# Ensure the script exits if any command fails
trap 'exit' ERR
set -E

# Section: Build and Deploy Frontend
echo "Building and deploying frontend..."
# Change directory to 'frontend' where the frontend code resides
cd frontend

# Run the build command to compile the frontend assets
npm run build

# Sync the built frontend assets to the specified S3 bucket
aws s3 sync build/ s3://auction-site-bucket

# Section: Deploy Backend
echo "Deploying backend..."
# Change directory to 'backend' where the backend code resides
cd ../backend

# Initialize an Elastic Beanstalk application for the backend
eb init -p node.js auction-site --region us-east-1

# Create a new environment in Elastic Beanstalk for the backend
eb create auction-site-env

# Deploy the backend to the Elastic Beanstalk environment
eb deploy

# Section: Apply Infrastructure Changes
echo "Applying infrastructure changes..."
# Change directory to 'infrastructure' where the CloudFormation templates are stored
cd ../infrastructure

# Deploy the infrastructure changes using AWS CloudFormation
aws cloudformation deploy --template-file cloudformation.yaml --stack-name auction-site-stack

# Print a message indicating that the deployment has completed successfully
echo "Deployment completed successfully."
