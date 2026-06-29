# Image Setup Guide for Trevia Website

## Directory Structure

To ensure the website works correctly, please set up the following image directories and files:

### 1. Logo Files

- `/public/logo.png` - Already exists in `/public/images/logo.png`
- `/public/logo-white.png` - Create a white version of your logo for dark backgrounds

### 2. Hero Images
Create a directory for hero banner images:

```
mkdir -p public/hero
```

You need three hero images:
- `/public/hero/hero-1.jpg`
- `/public/hero/hero-2.jpg`
- `/public/hero/hero-3.jpg`

You can use the existing images from `/public/images/cities/` as a source for these hero images.

### 3. Destination Images
The destination images are referenced in multiple components. You have images in `/public/images/cities/` that can be used:

```
mkdir -p public/destinations
```

Required destination images:
- `/public/destinations/rajasthan.jpg` - Copy from `/public/images/cities/Rajasthan.jpg`
- `/public/destinations/kerala.jpg` - Copy from `/public/images/cities/kerala.jpg`
- `/public/destinations/himachal.jpg` - Copy from `/public/images/cities/himachal.jpg`
- `/public/destinations/goa.jpg` - Copy from `/public/images/cities/goa.jpg`
- `/public/destinations/karnataka.jpg` - Copy from `/public/images/cities/karnataka.jpg`
- `/public/destinations/madhya-pradesh.jpg` - Copy from `/public/images/cities/madhyapradesh.jpg`

### 4. Team Member Images
For the About page:

```
mkdir -p public/team
```

Required team images:
- `/public/team/priya.jpg`
- `/public/team/rahul.jpg`
- `/public/team/sarah.jpg`

### 5. Office Images
For the Contact page:

```
mkdir -p public/offices
```

Required office images:
- `/public/offices/bangalore.jpg` - Copy from `/public/images/cities/bangalore.jpg`
- `/public/offices/mumbai.jpg` - Copy from `/public/images/cities/mumbai.jpg`
- `/public/offices/delhi.jpg` - Copy from `/public/images/cities/delhi.jpg`

### 6. CTA Image
For the Call-to-Action section on the homepage:
- `/public/cta-image.jpg` - You can use any appealing image of Indian landscapes

## How to Copy Images in Windows PowerShell

You can use these commands to copy the existing images to the new directories:

```powershell
# Create directories first
mkdir -Force public\hero
mkdir -Force public\destinations
mkdir -Force public\team
mkdir -Force public\offices

# Copy existing images to destinations folder
Copy-Item public\images\cities\Rajasthan.jpg public\destinations\rajasthan.jpg
Copy-Item public\images\cities\kerala.jpg public\destinations\kerala.jpg
Copy-Item public\images\cities\himachal.jpg public\destinations\himachal.jpg
Copy-Item public\images\cities\goa.jpg public\destinations\goa.jpg
Copy-Item public\images\cities\karnataka.jpg public\destinations\karnataka.jpg
Copy-Item public\images\cities\madhyapradesh.jpg public\destinations\madhya-pradesh.jpg

# Copy city images for office use
Copy-Item public\images\cities\bangalore.jpg public\offices\bangalore.jpg
Copy-Item public\images\cities\mumbai.jpg public\offices\mumbai.jpg
Copy-Item public\images\cities\delhi.jpg public\offices\delhi.jpg

# Copy some images for hero use
Copy-Item public\images\cities\Amritsar.jpg public\hero\hero-1.jpg
Copy-Item public\images\cities\Rajasthan.jpg public\hero\hero-2.jpg
Copy-Item public\images\cities\kerala.jpg public\hero\hero-3.jpg

# Create a white version of the logo
# (You'll need to create this manually in an image editor)

# Copy the logo for proper path
Copy-Item public\images\logo.png public\logo.png
```

For team member images and the CTA image, you'll need to either:
1. Create your own images
2. Use placeholder images
3. Download suitable stock images 