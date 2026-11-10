PORTFOLIO TEMPLATE
==================

Files:
- index.html : page structure and content
- style.css  : colors, layout, spacing, and responsive design

How to use:
1. Extract the ZIP file.
2. Open the portfolio_template folder.
3. Open index.html in your browser.
4. Edit the text in index.html:
   - Replace "Your Name" with your name.
   - Write your own About Me paragraph.
   - Add your real skills and projects.
   - Replace the email address.
5. To add a profile image:
   - Create a folder named images.
   - Put your photo inside it, for example profile.jpg.
   - In index.html, replace the profile-placeholder div with:
     <img class="profile-photo" src="images/profile.jpg" alt="My photo">
   - Add this CSS rule to style.css:
     .profile-photo {
         width: 230px;
         height: 230px;
         object-fit: cover;
         border-radius: 50%;
     }

Learning note:
HTML defines the page sections and content.
CSS controls the appearance and layout.
The comments in both files explain each part.
