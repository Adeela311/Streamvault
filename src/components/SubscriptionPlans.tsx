import React from 'react';
import { Check, Zap, Crown } from 'lucide-react';
import { motion } from 'motion/react';

interface Plan {
  id: 'free' | 'basic' | 'premium';
  name: string;
  price: string;
  features: string[];
  icon: any;
  color: string;
}

const PLANS: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    features: ['Standard Definition', 'With Ads', '1 Device', 'Limited Catalog'],
    icon: Check,
    color: 'bg-on-surface-variant/10'
  },
  {
    id: 'basic',
    name: 'Basic',
    price: '$9.99',
    features: ['High Definition (HD)', 'Ad-Free', '2 Devices', 'Full Content Access', 'Offline Viewing'],
    icon: Zap,
    color: 'bg-primary/20 text-primary border-primary/30'
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '$19.99',
    features: ['Ultra HD (4K) + HDR', 'Spatial Audio', '4 Devices', 'Early Access', 'AI Personal Assistant'],
    icon: Crown,
    color: 'bg-secondary/20 text-secondary border-secondary/30'
  }
];

interface SubscriptionPlansProps {
  onSelect: (plan: 'free' | 'basic' | 'premium') => void;
  currentPlan?: string;
}

export const SubscriptionPlans: React.FC<SubscriptionPlansProps> = ({ onSelect, currentPlan }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {PLANS.map((plan) => (
        <motion.div
          key={plan.id}
          whileHover={{ y: -8 }}
          className={`flex flex-col p-8 rounded-3xl border ${currentPlan === plan.id ? 'border-primary ring-1 ring-primary' : 'border-white/5'} bg-surface-container-low transition-all`}
        >
          <div className={`w-12 h-12 rounded-2xl ${plan.color} flex items-center justify-center mb-6`}>
            <plan.icon size={24} />
          </div>
          
          <h3 className="text-xl font-black font-headline uppercase tracking-tighter mb-2">{plan.name}</h3>
          <div className="flex items-baseline gap-1 mb-8">
            <span className="text-3xl font-black font-headline text-primary-container">{plan.price}</span>
            <span className="text-sm text-on-surface-variant">/mo</span>
          </div>

          <ul className="flex-grow space-y-4 mb-8">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm text-on-surface-variant font-medium">
                <Check size={16} className="text-primary flex-none" />
                {feature}
              </li>
            ))}
          </ul>

          <button
            onClick={() => onSelect(plan.id)}
            className={`w-full py-4 rounded-xl font-black font-headline uppercase tracking-tighter transition-all ${
              currentPlan === plan.id 
                ? 'bg-primary text-white scale-95 opacity-50 cursor-default'
                : 'bg-surface-container-highest hover:bg-primary hover:text-white'
            }`}
          >
            {currentPlan === plan.id ? 'Active Plan' : 'Select Plan'}
          </button>
        </motion.div>
      ))}
    </div>
  );
};
