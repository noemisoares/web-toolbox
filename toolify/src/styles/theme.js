// Design System - Tema Escuro Moderno

export const theme = {
  colors: {
    // Background
    background: '#0a0a0a',
    surface: '#111111',
    surfaceHover: '#1a1a1a',

    // Text
    textPrimary: '#ffffff',
    textSecondary: '#a0a0a0',
    textTertiary: '#707070',

    // Accent
    accent: '#10b981', // Verde
    accentLight: '#34d399',
    accentDark: '#059669',

    // Status
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#3b82f6',

    // Borders
    border: '#2a2a2a',
    borderLight: '#3a3a3a',
  },

  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '2.5rem',
    '3xl': '3rem',
  },

  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
  },

  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    base: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  },

  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};

export const getCSSVariables = () => {
  const vars = {};
  
  // Colors
  Object.entries(theme.colors).forEach(([key, value]) => {
    vars[`--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`] = value;
  });

  // Spacing
  Object.entries(theme.spacing).forEach(([key, value]) => {
    vars[`--spacing-${key}`] = value;
  });

  // Border radius
  Object.entries(theme.borderRadius).forEach(([key, value]) => {
    vars[`--radius-${key}`] = value;
  });

  // Transitions
  Object.entries(theme.transitions).forEach(([key, value]) => {
    vars[`--transition-${key}`] = value;
  });

  // Shadows
  Object.entries(theme.shadows).forEach(([key, value]) => {
    vars[`--shadow-${key}`] = value;
  });

  return vars;
};
