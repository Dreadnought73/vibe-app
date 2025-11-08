# You can use most Debian-based base images
# This sets the environment, which in this case is node
FROM node:21-slim

# Install curl
RUN apt-get update && apt-get install -y curl && apt-get clean && rm -rf /var/lib/apt/lists/*

# copy a bash script
COPY compile_page.sh /compile_page.sh
RUN chmod +x /compile_page.sh

# Install dependencies and customize sandbox
WORKDIR /home/user/nextjs-app

# create a next app in the docker
# why add flags: so the terminal will not block the code execution
RUN npx --yes create-next-app@15.3.3 . --yes

RUN npx --yes shadcn@2.6.3 init --yes -b neutral --force
RUN npx --yes shadcn@2.6.3 add --all --yes

# Move the Nextjs app to the home directory and remove the nextjs-app directory
# Tell the AI where the next js app is, and it is easier for the model to locate
RUN mv /home/user/nextjs-app/* /home/user/ && rm -rf /home/user/nextjs-app
