"use client"

// Once "use client" is defined in a file, all other modules imported into it, including child components, are considered part of the client bundle.
// In Next.js, Server Components are the default. Therefore all React components are part of the Server Component module graph unless defined or imported in a module that starts with the "use client" directive.

import { definePreview} from "next-sanity/preview"
import { projectId, dataset } from "./sanity.client";

function onPublicAccessOnly() {
    throw new Error(`Unable to load preview as you're not logged in`)
  }

  if (!projectId || !dataset) {
    throw new Error(
        `Missing projectId or dataset. Check your sanity.json or .env`
    );
  }
  export const usePreview = definePreview({projectId, dataset, onPublicAccessOnly})
