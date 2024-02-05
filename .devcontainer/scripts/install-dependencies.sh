#!/usr/bin/env sh

# Install SAP dependencies

npm install -g @sap/cds-dk@7.6.0
npm install -g mbt@1.2.24

# Install package.json dependencies
npm install

# Install Clound Foundry CLI

wget -q -O - https://packages.cloudfoundry.org/debian/cli.cloudfoundry.org.key | sudo apt-key add -
echo "deb https://packages.cloudfoundry.org/debian stable main" | sudo tee /etc/apt/sources.list.d/cloudfoundry-cli.list
sudo apt-get update
sudo apt-get install cf8-cli
cf install-plugin -f https://github.com/cloudfoundry-incubator/multiapps-cli-plugin/releases/latest/download/multiapps-plugin.linux64

# Start server
npm start