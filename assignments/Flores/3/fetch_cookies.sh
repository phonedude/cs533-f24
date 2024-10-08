#!/bin/bash

# Define the input file with the URLs and output directory
input_file="SFLOR001@ODU.EDU"  # Replace with the actual filename
output_dir="/home/samuelflores/cs533-f24/assignments/Flores/3/output_dir"

# Ensure the output directory exists
mkdir -p "$output_dir"

# Loop through each line in the text file (each URL)
while IFS= read -r url; do
  # Skip empty lines or comments
  if [[ -z "$url" || "$url" == \#* ]]; then
    continue
  fi

  # Clean the URL to use it in a file name (replace problematic characters if necessary)
  clean_url=$(echo "$url" | sed 's/[^a-zA-Z0-9]/_/g')

  # Use curl to fetch only the headers and save them to a file in the output directory
  curl -ILsk "$url" > "$output_dir/${clean_url}.txt"

  echo "Processed $url and saved to ${clean_url}.txt"

done < "$input_file"

