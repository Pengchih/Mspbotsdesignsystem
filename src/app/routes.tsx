import { CircleIcon, FrameIcon, TextNoneIcon } from '@radix-ui/react-icons';
import { Colors } from './pages/Foundation/Colors';
import { Typography } from './pages/Foundation/Typography';
import { Icons } from './pages/Foundation/Icons';
import { ButtonShowcase } from './pages/Components/ButtonShowcase';
import { InputShowcase } from './pages/Components/InputShowcase';
import { InputNumberShowcase } from './pages/Components/InputNumberShowcase';
import { CheckboxShowcase } from './pages/Components/CheckboxShowcase';
import { RadioShowcase } from './pages/Components/RadioShowcase';
import { SwitchShowcase } from './pages/Components/SwitchShowcase';
import { SliderShowcase } from './pages/Components/SliderShowcase';
import { BadgeShowcase } from './pages/Components/BadgeShowcase';
import { PaginationShowcase } from './pages/Components/PaginationShowcase';
import { TextareaShowcase } from './pages/Components/TextareaShowcase';
import { SelectShowcase } from './pages/Components/SelectShowcase';
import { AvatarShowcase } from './pages/Components/AvatarShowcase';
import { CardShowcase } from './pages/Components/CardShowcase';
import { ProgressShowcase } from './pages/Components/ProgressShowcase';
import { TagShowcase } from './pages/Components/TagShowcase';
import { Foundation } from './pages/Foundation';
import { Components } from './pages/Components';

export type Category = 'foundation' | 'components';
export type ComponentCategory = 'basic' | 'form' | 'data' | 'notice' | 'navigation' | 'others';

export interface RouteConfig {
  id: string;
  label: string;
  category: Category;
  componentCategory?: ComponentCategory; // Only for 'components' category
  component: React.ComponentType<any>;
  icon?: any;
}

export const routes: RouteConfig[] = [
  // Foundation
  {
    id: 'foundation',
    label: 'Foundation Overview',
    category: 'foundation',
    component: Foundation,
  },
  {
    id: 'colors',
    label: 'Color Palette',
    category: 'foundation',
    component: Colors,
    icon: CircleIcon,
  },
  {
    id: 'icons',
    label: 'Radix Icons',
    category: 'foundation',
    component: Icons,
    icon: FrameIcon,
  },
  {
    id: 'typography',
    label: 'Scales',
    category: 'foundation',
    component: Typography,
    icon: TextNoneIcon,
  },

  // Components - Overview
  {
    id: 'components',
    label: 'Components Overview',
    category: 'components',
    component: Components,
  },
  
  // Components - Basic
  {
    id: 'buttons',
    label: 'Button',
    category: 'components',
    componentCategory: 'basic',
    component: ButtonShowcase,
  },

  // Components - Form
  {
    id: 'inputs',
    label: 'Input',
    category: 'components',
    componentCategory: 'form',
    component: InputShowcase,
  },
  {
    id: 'input-number',
    label: 'Input Number',
    category: 'components',
    componentCategory: 'form',
    component: InputNumberShowcase,
  },
  {
    id: 'select',
    label: 'Select',
    category: 'components',
    componentCategory: 'form',
    component: SelectShowcase,
  },
  {
    id: 'textarea',
    label: 'Textarea',
    category: 'components',
    componentCategory: 'form',
    component: TextareaShowcase,
  },
  {
    id: 'checkbox',
    label: 'Checkbox',
    category: 'components',
    componentCategory: 'form',
    component: CheckboxShowcase,
  },
  {
    id: 'radio',
    label: 'Radio',
    category: 'components',
    componentCategory: 'form',
    component: RadioShowcase,
  },
  {
    id: 'switch',
    label: 'Switch',
    category: 'components',
    componentCategory: 'form',
    component: SwitchShowcase,
  },
  {
    id: 'slider',
    label: 'Slider',
    category: 'components',
    componentCategory: 'form',
    component: SliderShowcase,
  },

  // Components - Data
  {
    id: 'badge',
    label: 'Badge',
    category: 'components',
    componentCategory: 'data',
    component: BadgeShowcase,
  },
  {
    id: 'avatar',
    label: 'Avatar',
    category: 'components',
    componentCategory: 'data',
    component: AvatarShowcase,
  },
  {
    id: 'card',
    label: 'Card',
    category: 'components',
    componentCategory: 'data',
    component: CardShowcase,
  },
  {
    id: 'progress',
    label: 'Progress',
    category: 'components',
    componentCategory: 'data',
    component: ProgressShowcase,
  },
  {
    id: 'tag',
    label: 'Tag',
    category: 'components',
    componentCategory: 'data',
    component: TagShowcase,
  },

  // Components - Navigation
  {
    id: 'pagination',
    label: 'Pagination',
    category: 'components',
    componentCategory: 'navigation',
    component: PaginationShowcase,
  },
];
