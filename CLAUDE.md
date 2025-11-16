# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static wedding website for Mapi & Tiago's wedding on June 6, 2026. It's a simple HTML/CSS/JavaScript site with no build process or package manager - all dependencies are loaded via CDN.

## Architecture

### Core Technologies
- **Pure HTML/CSS/JavaScript**: No frameworks, no build tools
- **Apple MapKit JS**: Integrated for venue location mapping (loaded via CDN)
- **Multi-language support**: Italian (default), English, and Portuguese

### File Structure
- `index.html`: Main HTML structure with semantic sections
- `styles.css`: All styling with CSS custom properties and responsive design
- `script.js`: JavaScript for translations, language switching, and map initialization
- `images/`: Photo assets for gallery and dress code sections

### Key Features

**Multi-language System**:
- Translations stored in `script.js` as a JavaScript object with keys for IT/EN/PT
- Elements use `data-translate` attributes to link to translation keys
- Language preference saved to localStorage
- `setLanguage(lang)` function updates all translatable elements

**Apple MapKit Integration**:
- Requires authentication token (hardcoded in `script.js:126`)
- Initializes in `initializeMap()` function
- Map centered on venue: Fattoria Sociale Fuori di Zucca, Lusciano CE
- Coordinates: 41.0447, 14.2861

**Layout System**:
- Hero section with couple names and date
- Photo gallery with polaroid-style cards (scattered rotation effect)
- Bento grid layout for wedding details, map, story, dress code, travel info, and RSVP
- Responsive breakpoints at 968px, 640px, and 480px

## Development

### Running Locally
Open `index.html` directly in a browser - no server required for basic functionality. For Apple Maps to work properly, serve via HTTP:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`

### Adding Translations
1. Add new keys to all three language objects in `script.js` (IT/EN/PT)
2. Add `data-translate="your-key"` attribute to HTML elements
3. Language switcher will automatically update these elements

### Updating MapKit Token
MapKit JS tokens expire. To generate a new one:
1. Visit https://developer.apple.com/
2. Go to Certificates, Identifiers & Profiles
3. Create/update MapKit JS key
4. Replace token in `script.js:126` in the `authorizationCallback` function

### Styling Guidelines
- Uses CSS custom properties in `:root` for colors (--black, --white, --gray-*)
- Typography uses Georgia/Times New Roman serif fonts
- Responsive with clamp() for fluid typography and sizing
- Photo cards use transform rotations for scattered polaroid effect

## Important Details

- **No build process**: Edit files directly, refresh browser to see changes
- **Image paths**: Relative paths from root (e.g., `images/image-1.jpeg`)
- **External links**: RSVP links to Notion form, venue website, Google Maps, ETIAS info
- **Language detection**: Checks localStorage first, defaults to Italian
- **Smooth scroll**: Enabled via CSS `scroll-behavior: smooth`
