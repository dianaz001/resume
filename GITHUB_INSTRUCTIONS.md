# How to Push to GitHub & Deploy to Vercel

Since Git is not currently detected in your terminal, follow these steps:

## Phase 1: Install Git (If not installed)
1. Download Git for Windows: [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. Install it (Standard settings are fine).
3. Restart your terminal (or VS Code) to recognize the command.

## Phase 2: Create a Repository on GitHub
1. Log in to [GitHub.com](https://github.com/).
2. Click the **"+"** icon in the top right -> **New repository**.
3. Name it `resume-portfolio`.
4. Make it **Public** (required for free Vercel hosting) or Private.
5. Click **Create repository**.

## Phase 3: Push Your Code
Open your terminal in this project folder (`c:\Users\diana\git\resume`) and run these commands one by one:

```powershell
# 1. Initialize Git
git init

# 2. Add all files
git add .

# 3. Commit the files
git commit -m "Initial commit of resume website"

# 4. Link to your new GitHub repo (Replace YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/resume-portfolio.git

# 5. Push the code
git push -u origin master
```

## Phase 4: Deploy on Vercel
1. Go to [Vercel.com](https://vercel.com) and log in.
2. Click **"Add New..."** -> **"Project"**.
3. Select **"Import from GitHub"**.
4. You should see your `resume-portfolio` repository. Click **Import**.
5. Vercel will detect `Vite` automatically. Click **Deploy**.

## Alternative: Drag & Drop (No Git required)
If you don't want to install Git right now:
1. Go to Vercel.
2. Creating a new project.
3. Drag the `dist` folder from your computer into the upload area.
