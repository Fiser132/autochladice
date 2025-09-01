# Component Architecture

This project follows a clean, modular component architecture with proper separation of concerns and TypeScript best practices.

## Directory Structure

```
src/
├── components/
│   ├── layout/           # Layout components (Navigation, Footer)
│   ├── sections/         # Page sections (Hero, Services, etc.)
│   ├── ui/              # Reusable UI components
│   └── index.ts         # Component exports
├── constants/
│   └── data.ts          # Application data and constants
├── utils/
│   └── icons.tsx        # Reusable SVG icons
└── app/
    └── page.tsx         # Main page component
```

## Component Categories

### Layout Components (`/layout`)
- **Navigation**: Responsive navigation bar with scroll effects
- **Footer**: Site footer with company information and links

### Section Components (`/sections`)
- **HeroSection**: Main landing section with call-to-action
- **ServicesSection**: Services overview with interactive cards
- **DetailedServicesSection**: In-depth service descriptions
- **FeaturesSection**: Company features and benefits
- **ContactSection**: Contact information and map

### UI Components (`/ui`)
- **ServiceCard**: Reusable service card with rotation effects
- **SectionBadge**: Consistent section badges
- **BackgroundPattern**: Decorative background patterns

## Best Practices Implemented

### 1. TypeScript
- All components have proper TypeScript interfaces
- Strict typing for props and data structures
- `as const` assertions for immutable data

### 2. Component Design
- Single responsibility principle
- Reusable components with configurable props
- Consistent prop interfaces with optional `className`

### 3. Performance
- Proper image optimization with Next.js Image component
- Lazy loading for non-critical resources
- Efficient event handling with proper cleanup

### 4. Accessibility
- Semantic HTML structure
- Proper ARIA labels and alt text
- Keyboard navigation support

### 5. Maintainability
- Centralized data management in constants
- Reusable icon components
- Consistent naming conventions
- Clear component hierarchy

## Usage Examples

### Basic Component Usage
```tsx
import { Navigation, HeroSection } from '../components';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <HeroSection />
    </div>
  );
}
```

### Using Constants
```tsx
import { COMPANY_INFO, SERVICES } from '../constants/data';

// Access company information
const phone = COMPANY_INFO.phone;

// Map through services
{SERVICES.map((service, index) => (
  <ServiceCard key={index} {...service} />
))}
```

### Custom Icons
```tsx
import { PhoneIcon, EmailIcon } from '../utils/icons';

<PhoneIcon className="w-8 h-8" />
<EmailIcon size={24} />
```

## Data Management

All application data is centralized in `src/constants/data.ts`:
- Company information
- Navigation links
- Services data
- Contact information
- Footer links

This approach ensures:
- Single source of truth
- Easy maintenance and updates
- Type safety with TypeScript
- Consistent data across components

## Styling

The project uses Tailwind CSS with:
- Consistent color scheme (emerald/slate)
- Responsive design patterns
- Modern UI components
- Smooth animations and transitions
- Dark theme optimization 