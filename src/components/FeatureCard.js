'use client'

import { motion } from 'framer-motion'

export default function FeatureCard({
    icon,
    title,
    description,
    index = 0,
    className = ''
}) {
    // Animation variants for staggered animations
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.1
            }
        },
        hover: {
            y: -5,
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
            transition: {
                duration: 0.2
            }
        }
    }

    return (
        <motion.div
            className={`bg-gray-50 rounded-lg p-6 ${className}`}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
        >
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-white mx-auto">
                {icon}
            </div>
            <h3 className="mt-5 text-lg font-medium text-gray-900 text-center">{title}</h3>
            <p className="mt-2 text-sm text-gray-500 text-center">{description}</p>
        </motion.div>
    )
}

// Fallback version without animations for environments where framer-motion isn't available
export function FeatureCardStatic({
    icon,
    title,
    description,
    className = ''
}) {
    return (
        <div className={`bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}>
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-white mx-auto">
                {icon}
            </div>
            <h3 className="mt-5 text-lg font-medium text-gray-900 text-center">{title}</h3>
            <p className="mt-2 text-sm text-gray-500 text-center">{description}</p>
        </div>
    )
}