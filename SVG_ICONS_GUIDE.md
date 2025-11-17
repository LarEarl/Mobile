# Как добавить SVG иконки

## Использование готовых иконок

В проекте уже есть готовые SVG иконки в файле `components/icons.tsx`:
- `TravelIcon` - путешествия
- `DeliveryIcon` - доставка
- `BonusIcon` - бонусы
- `SupportIcon` - поддержка

### Пример использования:

```tsx
import { TravelIcon } from '@/components/icons';

// В JSX:
<TravelIcon size={24} color="#FF6B35" />
```

## Добавление своей SVG иконки

### Шаг 1: Подготовка SVG файла

Возьмите ваш SVG код, например:
```xml
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 0C5.37..." fill="#FE5900"/>
</svg>
```

### Шаг 2: Конвертация в React Native компонент

1. Откройте файл `components/custom-icons.tsx` (или создайте новый файл в папке `components`)
2. Импортируйте необходимые компоненты:
```tsx
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
```

3. Создайте функцию-компонент:
```tsx
export function MyCustomIcon({ size = 24, color = '#FE5900' }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="..." fill={color} />
    </Svg>
  );
}
```

### Шаг 3: Замена элементов

Замените HTML теги на React Native компоненты:
- `<svg>` → `<Svg>`
- `<path>` → `<Path>`
- `<g>` → `<G>`
- `<rect>` → `<Rect>`
- `<circle>` → `<Circle>`
- `<clipPath>` → `<ClipPath>`

### Шаг 4: Конвертация атрибутов

Замените kebab-case на camelCase:
- `fill-rule` → `fillRule`
- `clip-rule` → `clipRule`
- `clip-path` → `clipPath`
- `stroke-width` → `strokeWidth`

### Шаг 5: Использование в приложении

```tsx
import { MyCustomIcon } from '@/components/custom-icons';

// В компоненте:
<CategoryButton 
  icon={<MyCustomIcon size={28} color="#FF6B35" />} 
  label="Custom" 
/>
```

## Примеры использования

### В категориях (Home Screen):
```tsx
<CategoryButton 
  icon={<TravelIcon size={28} color="#FF6B35" />} 
  label="Travel" 
/>
```

### В уведомлениях:
```tsx
<NotificationItem
  title="New notification"
  icon={<CustomEarthIcon size={24} color="#FF6B35" />}
  iconBg="rgba(255, 107, 53, 0.2)"
  ...
/>
```

### С разными цветами и размерами:
```tsx
<TravelIcon size={16} color="#FFFFFF" />
<TravelIcon size={24} color="#FF6B35" />
<TravelIcon size={32} color="#FE5900" />
```

## Где найти SVG иконки

- [Heroicons](https://heroicons.com/)
- [Material Icons](https://fonts.google.com/icons)
- [Feather Icons](https://feathericons.com/)
- [Streamline](https://www.streamlinehq.com/)
- [Iconify](https://icon-sets.iconify.design/)
