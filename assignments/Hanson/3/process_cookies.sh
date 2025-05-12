#!/bin/sh

# Define the input file with the URLs and output directory
input_file="BHANS003@ODU.EDU"
output_dir="output_files"

# Ensure the output directory exists and is clean
mkdir -p "$output_files"
find "$output_dir" -type f -name '*.txt' -delete

# Read each line from the input file
while IFS= read -r url; do
  # Skip blank lines and comments
  case "$url" in
    ''|\#*) continue ;;
  esac

  # Sanitize URL for filename use
  clean_url=$(echo "$url" | tr -c '[:alnum:]' '_')

  echo "Processing the following site: $url"

  # Perform the HEAD request
  response=$(curl -s -k -I -L -X HEAD \
    --connect-timeout 10 --max-time 30 --max-redirs 10 \
    "$url" -w "Final-URL: %{url_effective}\n")

  # Check curl exit status
  if [ $? -ne 0 ]; then
    echo "Warning: $url could not be processed using curl"
    echo "$url" >> "$output_dir/failed_urls.txt"
    continue
  fi

  # Check for HTML content in the headers (invalid)
  echo "$response" | grep -qi "<html"
  if [ $? -eq 0 ]; then
    echo "Warning: $url returned HTML content in response to HEAD request"
    echo "$response" > "$output_dir/${clean_url}_invalid.txt"
    continue
  fi

  # Save the valid response
  echo "$response" > "$output_dir/${clean_url}.txt"
  echo "Processed $url and saved to ${clean_url}.txt"

done < "$input_file"