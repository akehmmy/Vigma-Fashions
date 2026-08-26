Drop image files here.

COLLECTION & LOOKBOOK PHOTOS
1. Save the image in this folder, e.g. aurelia.jpg
2. Open data/collections.js and set the matching item's image field:
      image: "/images/aurelia.jpg"
   (Leave it as null to keep the elegant text placeholder.)
   The path always starts with /images/ — do NOT include "public".

LOGO
1. Save it here as logo.png (or logo.svg).
2. Tell Claude, or edit components/Navbar.js to swap the text brand
   for the image.

Tips for best results:
- Collection photos look best portrait (3:4), e.g. 1200 x 1600 px.
- Use .jpg for photos, .png or .svg for the logo (transparent background).
- Keep files reasonably small (under ~500 KB each) so the site loads fast.
