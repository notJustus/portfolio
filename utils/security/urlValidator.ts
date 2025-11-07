/**
 * Validates and sanitizes URLs to prevent security vulnerabilities
 */

/**
 * Validates if a URL is safe to use (only http/https protocols)
 * @param url - The URL to validate
 * @returns true if the URL is safe, false otherwise
 */
export const isValidUrl = (url: string | null | undefined): boolean => {
  if (!url || typeof url !== "string") {
    return false;
  }

  try {
    const parsedUrl = new URL(url);
    // Only allow http and https protocols
    return parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:";
  } catch {
    // If URL parsing fails, it's not a valid URL
    return false;
  }
};

/**
 * Validates if a URL is a safe video URL (only http/https protocols)
 * @param url - The video URL to validate
 * @returns true if the URL is safe for video, false otherwise
 */
export const isValidVideoUrl = (url: string | null | undefined): boolean => {
  if (!url || typeof url !== "string") {
    return false;
  }

  // Check if it's a valid URL
  if (!isValidUrl(url)) {
    return false;
  }

  // Additional check: ensure it's not a javascript: or data: URL
  const lowerUrl = url.toLowerCase().trim();
  if (lowerUrl.startsWith("javascript:") || lowerUrl.startsWith("data:")) {
    return false;
  }

  return true;
};
