import {
  Armchair,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  Building2,
  CheckCircle2,
  Circle,
  Code2,
  Gavel,
  Globe2,
  GraduationCap,
  Headset,
  HeartPulse,
  IndianRupee,
  Landmark,
  Megaphone,
  MessageCircle,
  MessagesSquare,
  MoreHorizontal,
  Paintbrush,
  Palette,
  Pencil,
  Plane,
  Printer,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Truck,
  UsersRound,
  Workflow,
} from 'lucide-react';

const iconMap = {
  account_balance: Landmark,
  arrow_forward: ArrowRight,
  auto_awesome: Sparkles,
  campaign: Megaphone,
  chat: MessageCircle,
  check_circle: CheckCircle2,
  code: Code2,
  design_services: Paintbrush,
  domain: Building2,
  draw: Pencil,
  event_seat: Armchair,
  forum: MessagesSquare,
  gavel: Gavel,
  groups: UsersRound,
  integration_instructions: Workflow,
  language: Globe2,
  local_hospital: HeartPulse,
  local_shipping: Truck,
  monitoring: BarChart3,
  more_horiz: MoreHorizontal,
  palette: Palette,
  payments: IndianRupee,
  phone_iphone: Smartphone,
  print: Printer,
  public: Globe2,
  query_stats: BarChart3,
  real_estate_agent: Building2,
  school: GraduationCap,
  shield: ShieldCheck,
  shopping_bag: ShoppingBag,
  smart_toy: Bot,
  support_agent: Headset,
  travel_explore: Plane,
  verified_user: BadgeCheck,
};

export default function Icon({ name, size = 24, strokeWidth = 2, className = '', ...props }) {
  const SvgIcon = iconMap[name] || Circle;

  return (
    <SvgIcon
      aria-hidden="true"
      focusable="false"
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
}
