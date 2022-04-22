# Group 75
# restaurant-website


## How to Use Repo
### Fork this repo

Fork the repo to create your own copy in github account to work from

### Clone your Fork
You should always work directly from your forked copy

```bash
git clone https://github.com/your-username/restaurant-website.git
cd restaurant-website
```

### Create a New Branch
I suggest creating a seprate branch from your main branch where all your work and changes you make will be stored. This will keep you main or master branch clean at all times, meaning that your main or master branch will always be similar to the original master.

```bash
git checkout -b updates # `-b` creates the branch if it does not exist
```

### Commit your Exercise solutions
```bash
git status
git add .
git commit -m "your commit message"
git push origin updates # branch `updates` was created earlier
```

### How to update your fork
```bash
# 1. Switch to main or master branch
git chekout main
# 2. Check if your local copy has a link to original `..SH-React-Group-75/restaurant-website.git`
# 3. If not, add a link to original, you can choose any name for the link or use `upstream`
git remote add upstream https://github.com/SH-React-Group-75/restaurant-website.git
# 4. check again to confirm the link added
git remote -v
# 5. now you can fetch updates from the original repo, assuming you named it `upstream`
git fetch upstream
# 6. merge the updates to your local master branch
git merge upstream/master master
# 7. push the merged updates to your Forked copy on GitHub
git push origin master
```

> If you wish to update any other branch, repeat steps 6-7 with the branch name. See snippet below for `updates` branch

```bash
git merge upstream/master updates
git push origin updates
```

> if you used main as your branch u can replace master with main in the commands