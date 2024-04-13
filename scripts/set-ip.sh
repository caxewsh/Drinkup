#!/bin/bash

echo "Fetching the current IP address..."

# Get the IP address of the first interface found.
IP_ADDRESS=$(ipconfig getifaddr en0)

# Fallback in case en0 is not available (use Wi-Fi interface)
if [ -z "$IP_ADDRESS" ]; then
    IP_ADDRESS=$(ipconfig getifaddr en1)
fi

if [ -z "$IP_ADDRESS" ]; then
    echo "Error: IP address could not be found."
    exit 1
fi

echo -n "Updating the API URL in .env file... "

# Create or overwrite the .env file with the IP_ADDRESS
echo "API_BASE_URL=http://$IP_ADDRESS:3000" > .env

# Optionally, add additional environment variables to the .env file
# echo "ANOTHER_VAR=value" >> .env

echo "Done."
echo "API URL successfully updated to http://$IP_ADDRESS:3000"

# Importing the .env file to EAS as secrets
echo "Uploading secrets to EAS..."

# Using --force to override existing secrets
eas secret:push --scope project --env-file .env --force

if [ $? -eq 0 ]; then
    echo "Secrets uploaded successfully to EAS."
else
    echo "Failed to upload secrets to EAS."
fi
