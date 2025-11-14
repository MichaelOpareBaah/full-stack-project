export function getContentType(ext) {

  const types = {
    ".html": "text/html",
  ".htm": "text/html",

  ".js": "text/javascript",
  ".mjs": "text/javascript",

  ".css": "text/css",

  ".json": "application/json",

  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",

  ".txt": "text/plain",
  ".xml": "application/xml",

  // Fonts
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",

  // Video / Audio
  ".mp4": "video/mp4",
  ".mp3": "audio/mpeg",
  ".wav": "audio/wav",

  // React / Web bundlers sometimes output these
  ".map": "application/json",

  // PDFs  
  ".pdf": "application/pdf",

  // Default fallback
  "default": "application/octet-stream"
  }
  
  return types[ext.toLowerCase()] || "text/html"
}