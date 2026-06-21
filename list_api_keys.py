from googleapiclient.discovery import build

# Replace with your project ID
PROJECT_ID = 'your-project-id'

# Create credentials from your service account file
# Replace 'path/to/service_account_key.json' with the path to your key file
import json
from google.oauth2 import service_account

creds = service_account.Credentials.from_service_account_file(
    'path/to/service_account_key.json',
    scopes=['https://www.googleapis.com/auth/cloud-platform']
)

# Create the API client
service = build('cloudresourcemanager', 'v1', credentials=creds)

# List all projects
projects = service.projects().list().execute()

# For each project, list API keys
for project in projects.get('projects', []):
    project_id = project['projectId']
    print(f"Project: {project_id}")
    
    # Use the API to list API keys for this project
    # Note: The API to list API keys directly is part of the API Keys API
    #       which is not part of the cloudresourcemanager API.
    #       You would need to use the API Keys API for this.
    #       The following is a simplified example and might not work as-is.
    api_keys_service = build('apikeys', 'v2', credentials=creds)
    api_keys = api_keys_service.projects().locations().keys().list(
        parent=f"projects/{project_id}/locations/-"
    ).execute()
    
    for api_key in api_keys.get('keys', []):
        print(f"API Key: {api_key['name']}")