# Project Images

This folder contains custom images for project cards. 

## Usage

To use a custom image for a project:

1. Add your image file to this folder (supports .jpg, .jpeg, .png, .gif)
2. In `src/data/projects.ts`, set the `customImage` property to your filename
3. The `getProjectImage()` function will automatically use your custom image

## Example

If you have an image called `my-project.png`:
- Place it in `/public/project-images/my-project.png`
- Set `customImage: 'my-project.png'` in the project object
- Set `customImage: null` to use the fallback URL instead

## Supported Formats
- .jpg, .jpeg
- .png
- .gif (animated gifs supported)

## Image Guidelines
- Recommended size: 1200x800px or similar aspect ratio
- File size: Keep under 2MB for optimal loading
- Use descriptive filenames matching your project IDs