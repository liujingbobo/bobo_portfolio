export const palette = {
  bgDark: '#0d0d0d',
  bgCard: '#1a1a2e',
  bgCardHover: '#252542',
  neonCyan: '#00fff5',
  neonPink: '#ff00ff',
  neonYellow: '#ffff00',
  neonGreen: '#39ff14',
  neonRed: '#ff3366',
  neonPurple: '#bf00ff',
  textPrimary: '#ffffff',
  textSecondary: '#888888',
} as const;

export type Palette = typeof palette;
