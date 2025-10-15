# Project Images

This folder contains custom images for project cards and publications.

## Usage

### For Projects:
To use a custom image for a project:

1. Add your image file to this folder (supports .jpg, .jpeg, .png, .gif)
2. In `src/data/projects.ts`, set the `customImage` property to your filename
3. The `getProjectImage()` function will automatically use your custom image

### For Publications:
To use a custom image for a publication:

1. Add your image file to this folder (supports .jpg, .jpeg, .png, .gif)
2. The publications page will automatically look for images with the specified filenames
3. If no custom image is found, it will fall back to the placeholder image

## Example

If you have an image called `my-project.png`:
- Place it in `/public/project-images/my-project.png`
- Set `customImage: 'my-project.png'` in the project object
- Set `customImage: null` to use the fallback URL instead

For publications, simply place your image with the expected filename (e.g., `raynauds-publication.png`) in this folder.

## Supported Formats
- .jpg, .jpeg
- .png
- .gif (animated gifs supported)

## Image Guidelines
- For projects: Recommended size: 1200x800px or similar aspect ratio
- For publications: Any size/aspect ratio (images will be displayed at full size within the container)
- File size: Keep under 2MB for optimal loading
- Use descriptive filenames matching your project IDs