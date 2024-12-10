# create a new repository on the command line
echo "# ask-klara-ai" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/FLNDRNDev/ask-klara-ai.git
git push -u origin main

# push an existing repository from the command line
git add .
git commit -m "your commit text"
git push origin main