# Deploy to Vercel

This workflow prepares your application for deployment to Vercel.

## 1. Build the Application
We have already built your application. The production-ready files are located in the `dist` folder.

## 2. Deploy Using Vercel CLI (Recommended)
If you have the Vercel CLI installed, you can simply run:
```powershell
vercel deploy
```
Follow the prompts to set up your project.

## 3. Deploy via Dashboard (Manual)
1. Go to [Vercel.com](https://vercel.com) and sign up/login.
2. Click **"Add New..."** -> **"Project"**.
3. Select **"Import Third-Party Git Repository"** if your code is on GitHub, OR click **"Upload"** to drag-and-drop.
4. If dragging and dropping:
   - Drag the `dist` folder from your project directory: `c:\Users\diana\git\resume\dist`
5. Click **Deploy**.

## 4. Verification
Your site will be live at a URL like `project-name.vercel.app`.
