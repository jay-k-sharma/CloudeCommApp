#!/bin/bash

# Exit on any non-zero status.
trap 'exit' ERR
set -E

# Build and deploy frontend
echo "Building and deploying frontend..."
cd frontend
npm run build
aws s3 sync build/ s3://auction-site-bucket

# Deploy backend
echo "Deploying backend..."
cd ../backend
eb init -p node.js auction-site --region us-east-1
eb create auction-site-env
eb deploy

# Apply infrastructure changes
echo "Applying infrastructure changes..."
cd ../infrastructure
aws cloudformation deploy --template-file cloudformation.yaml --stack-name auction-site-stack

echo "Deployment completed successfully."
