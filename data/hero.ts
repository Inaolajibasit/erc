/** Replace these paths to change footage without changing hero components.
 * Current assets are derived from the user-supplied hero-video.mp4, not stock.
 * A portrait source can replace mobileVideo independently when available.
 */
export const heroMedia = {
  desktopVideo: "/video/hero-desktop.mp4",
  mobileVideo: "/video/hero-mobile.mp4",
  poster: "/images/hero-poster.webp",
  desktopPosition: "50% 50%",
  mobilePosition: "58% 50%",
} as const;
