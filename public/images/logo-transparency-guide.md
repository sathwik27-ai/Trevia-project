# How to Make the Logo Background Transparent

To keep the exact design of the logo but with a transparent background, follow these steps:

## Option 1: CSS Solution (Already Implemented)

The current implementation uses CSS `mix-blend-mode: screen` to make the white background blend with the video behind it.

## Option 2: Create a Transparent PNG (For Better Quality)

For a more permanent solution with better quality:

1. **Using an Online Tool:**
   - Go to https://www.remove.bg/ or https://www.photopea.com/
   - Upload your logo2.jpg file
   - The tool will automatically remove the white background
   - Download as a PNG with transparency
   - Save as "logo2-transparent.png" in the "/public/images/" folder

2. **Using Photoshop/GIMP:**
   - Open logo2.jpg in your image editor
   - Use the Magic Wand tool to select the white background
   - Delete the selection to create transparency
   - Save as a PNG with transparency enabled
   - Save as "logo2-transparent.png" in the "/public/images/" folder

3. **Then update the code:**
   ```jsx
   <Image
     src="/images/logo2-transparent.png"
     alt="Trevia"
     width={300}
     height={150}
     className="drop-shadow-lg"
   />
   ```

This will give you the exact same design but with a true transparent background. 