// Finds every feature folder (src/features/<name>/index.jsx) when the app is built.
// Each one exports an object with its id, menu heading and pages.
// Deleting a feature folder removes its pages and menu links; nothing else needs editing.
const modules = import.meta.glob('../features/*/index.jsx', { eager: true })

const features = Object.values(modules)
  .map((module) => module.default)
  .sort((a, b) => a.id.localeCompare(b.id))

export default features
