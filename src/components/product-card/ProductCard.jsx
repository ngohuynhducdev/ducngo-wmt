import { motion } from 'framer-motion'

export default function ProductCard({ product, onClick }) {
    return (
        <motion.div
            className="bg-background flex flex-col gap-4 items-center rounded-xl shadow-lg p-4 cursor-pointer transition relative"
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
        >
            <img
                src={product.image}
                alt={product.name}
                className="object-cover rounded-md aspect-square"
            />
            <h3 className="text-h-2 font-bold text-primary">{product.name}</h3>
            <p className="text-body-1 text-secondary line-clamp-3">{product.description}</p>
        </motion.div>
    )
}
