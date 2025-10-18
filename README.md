# Ankit500ak — GitHub Pages site

This is a simple GitHub Pages starter site for the `Ankit500ak` profile. It contains a single-page responsive portfolio you can customize.

Files added:

- `index.html` — main page
- `assets/css/style.css` — styles
- `assets/js/main.js` — small interactive script

How to publish

1) Choose repository type

- User/organization page: create a repo named `Ankit500ak.github.io`. Push the site to the `main` branch and GitHub will serve it at `https://Ankit500ak.github.io/`.
- Project page: any repo name is fine; deploy from the `gh-pages` branch or the `main` branch (set in repo Settings → Pages).

2) Initialize, commit and push (PowerShell-friendly one-liners)

   git init ; git add . ; git commit -m "Initial commit: GitHub Pages site"
   git remote add origin https://github.com/Ankit500ak/REPO_NAME.git ; git branch -M main ; git push -u origin main

3) Enable Pages

Go to the repository Settings → Pages and select the branch (`main` and folder `/ (root)`) or `gh-pages` if you prefer that workflow. GitHub will show the published URL once active.

4) Quick customizations

- Edit `index.html` to add your projects, change the hero text and email.
- Edit `assets/js/main.js` to populate the `projects` array with real repos and demo links.
- Replace colors and fonts in `assets/css/style.css`.

If you'd like, I can:
- auto-generate a projects list from your GitHub profile (requires a GitHub token for private repos),
- add social links and a resume download, or
- add a contact form that posts to Formspree or Netlify Forms.

This README assumes you will replace `REPO_NAME` with the actual repository name you create on GitHub.
