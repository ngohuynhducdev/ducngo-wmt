import { AnimatePresence, motion } from 'framer-motion'

const maskVariants = {
    hidden: {
        opacity: 0,
        transition: { duration: 0.3, ease: 'linear' },
    },
    visible: {
        opacity: 1,
        transition: { duration: 0.3, ease: 'linear' },
    },
}

const contentVariants = {
    visible: { scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    hidden: {
        scale: 0.85,
        transition: { duration: 0.3, ease: 'easeOut' },
    },
}

export default function ProductModal({ product, open, setOpen  }) {
    if (!product) return null

    return (
        <AnimatePresence>
            {open && (
                <div className="fixed left-0 top-0 z-50 flex h-dvh w-dvw items-center justify-center transition-all">
                    <motion.div
                        onClick={() => setOpen(false)}
                        className="absolute left-0 top-0 h-full w-full bg-black/70"
                        variants={maskVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    />
                    <motion.div
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="relative w-[90%] max-h-[90%] bg-white rounded-2xl p-8 max-w-[62rem] scale-[0.85] transition-transform duration-300 ease-in"
                    >
                        <div
                            className="absolute top-0 right-0 z-10 p-2 text-5xl lg:p-4 lg:text-[4rem] cursor-pointer select-none leading-[0.5] transition-transform duration-300 ease-in-out hover:scale-110"
                            onClick={() => setOpen(false)}
                        >
                            &times;
                        </div>
                        <div className="flex flex-col lg:flex-row lg:items-center gap-4 overflow-auto max-h-[80dvh] relative">
                            <img
                                className="w-full rounded-md object-cover lg:w-1/2 lg:max-w-[400px] h-auto"
                                src={product?.image}
                                alt={product?.name || 'Product'}
                            />
                            <div className="flex-1 flex flex-col gap-4 px-2">
                                <h2 className="text-h-2 font-bold xl:text-h-1 text-primary">
                                    {product?.name}
                                </h2>
                                <p className="text-body-1 text-secondary xl:text-sub-2">
                                    {product?.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
            </div>
            )}
        </AnimatePresence>
    )
}
