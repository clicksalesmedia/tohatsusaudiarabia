// Utility for generating consistent particle positions to prevent hydration errors

export interface ParticlePosition {
  right: number;
  top: number;
  duration: number;
  delay: number;
}

// Predefined particle sets for different use cases
export const generateParticleSet = (count: number, seed: string): ParticlePosition[] => {
  // Using a simple hash function based on the seed to generate consistent values
  const hash = (str: string, index: number) => {
    let hash = 0;
    const combined = str + index.toString();
    for (let i = 0; i < combined.length; i++) {
      const char = combined.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
  };

  const particles: ParticlePosition[] = [];
  
  for (let i = 0; i < count; i++) {
    const rightHash = hash(seed + 'right', i);
    const topHash = hash(seed + 'top', i);
    const durationHash = hash(seed + 'duration', i);
    const delayHash = hash(seed + 'delay', i);
    
    particles.push({
      right: (rightHash % 10000) / 100, // 0-100%
      top: (topHash % 10000) / 100, // 0-100%
      duration: 3 + ((durationHash % 500) / 100), // 3-8 seconds
      delay: (delayHash % 300) / 100, // 0-3 seconds
    });
  }
  
  return particles;
};

// Predefined sets for common use cases
export const HERO_PARTICLES = generateParticleSet(12, 'hero');
export const CTA_PARTICLES = generateParticleSet(10, 'cta');
export const SMALL_PARTICLES = generateParticleSet(8, 'small');
export const LARGE_PARTICLES = generateParticleSet(15, 'large');

// Hook to get particles safely (prevents hydration issues)
export const useParticles = (count: number, seed: string): ParticlePosition[] => {
  return generateParticleSet(count, seed);
}; 