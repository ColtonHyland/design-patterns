#!/bin/bash

# Check if a pattern name is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <design-pattern-name>"
  exit 1
fi

# Assign the first argument to a variable
PATTERN_NAME=$1

# Create a new directory for the design pattern
mkdir "$PATTERN_NAME"
cd "$PATTERN_NAME" || exit

# Initialize a new Node.js project
npm init -y

# Install TypeScript as a dev dependency
npm install typescript --save-dev

# Create a basic tsconfig.json
cat <<EOL > tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true
  },
  "include": ["src"]
}
EOL

# Create the src directory and a basic index.ts file
mkdir src
cat <<EOL > src/index.ts
console.log('Hello, this is the $PATTERN_NAME design pattern!');
EOL

# Add build and start scripts to package.json
npx json -I -f package.json -e 'this.scripts={"build":"tsc","start":"node dist/index.js","dev":"tsc -w"}'

echo "Boilerplate for $PATTERN_NAME design pattern created."