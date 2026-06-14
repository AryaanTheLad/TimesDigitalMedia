// Centralized configuration for debugging Safari freezing/performance issues.
// Set any of these values to true to temporarily disable that system and test in Safari.
export const DEBUG_TOGGLES = {
  disableFramerMotion: false,          // Test 1 & Test 6: Bypasses Framer Motion animation loops
  disableLenis: false,                 // Test 2: Completely turns off Lenis smooth scrolling
  disableCSSAnimations: false,         // Test 4: Injects styles to kill CSS keyframe animations & transitions
  disableBlurEffects: true,           // Test 5: Injects styles to clear CSS filters & backdrop blurs
  disableIntersectionObservers: false, // Test 8: Bypasses IntersectionObservers & useInView triggers
};
