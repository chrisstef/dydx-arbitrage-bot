# Use an official Python runtime as the base image
FROM python:3.10-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file
COPY requirements.txt .

# Install the Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the source code
COPY programa/ ./programa/
COPY .env .

# Set environment variables
ENV MODE="DEVELOPMENT"

# Define the command to run your bot
CMD python ./programa/main.py
