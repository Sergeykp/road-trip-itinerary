# Road Trip Itinerary

Family trip planner: Calgary → Silver Star (July 23–27).

## Stack

- Vite + React + TypeScript
- CSS Modules
- Trip data in `src/data/trip.json`

## Commands

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```

## Editing the itinerary

Edit **`src/data/trip.json`**:

| Field | Notes |
|-------|--------|
| `meta` | Page title, route line, subtitle |
| `days[].stops[].desc` | HTML (`<p>`, `<a>`, `<strong>`, lists) |
| `days[].stops[].links` | `{ "label": "...", "url": "https://..." }` |
| `days[].stops[].tips` | String array |
| `days[].stops[].info` | `{ "icon": "ti-clock", "text": "..." }` (Tabler icon class) |
| `days[].stops[].imgs` | Image URLs |
| `days[].stops[].q` | Google Maps search query |

## Project layout

```
src/
  data/trip.json          # all trip content
  types/trip.ts           # TypeScript types
  components/             # UI (CSS modules per component)
  App.tsx                 # layout & state
```
