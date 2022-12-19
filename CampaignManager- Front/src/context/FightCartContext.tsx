import { createContext, ReactNode, useContext, useState } from "react";

type FightCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    damage: number
}

type FightCartContext = {
    getItemDamage: (id: number) => number
    increaseCartDamage: (id: number) => void
    decreaseCartDamage: (id: number) => void
    removeFromCart: (id: number) => void
}

const FightCartContext = createContext({} as 
FightCartContext)

export function useFightCart() {
    return useContext(FightCartContext)
}

export function FightCartProvider({ children }:
FightCartProviderProps) {
        const [cartItems, setCartItems] = useState<CartItem[]>([])

        function getItemDamage(id: number) {
            return cartItems.find(item => item.id === id)?.damage || 0
        }

        function increaseCartDamage(id:number) {
            setCartItems(currentItems => {
                if(currentItems.find(item=> item.id ===id) == null) {
                    return [...currentItems, {id, damage:1 }]
                } else {
                    return currentItems.map(item=> {
                        if(item.id===id) {
                            return {...item, damage: item.damage + 1}
                        } else {
                            return item
                        }
                    })
                }
            })
        }

        function decreaseCartDamage(id:number) {
            setCartItems(currentItems => {
                if(currentItems.find(item=> item.id ===id)?.damage === 1) {
                    return currentItems.filter(item => item.id !== id)
                } else {
                    return currentItems.map(item=> {
                        if(item.id===id) {
                            return {...item, damage: item.damage - 1}
                        } else {
                            return item
                        }
                    })
                }
            })
        }

        function removeFromCart(id:number) {
            setCartItems(currItems => {
                return currItems.filter(item => item.id !== id)
            })
        }

    return (
        <FightCartContext.Provider value={{ getItemDamage, increaseCartDamage, decreaseCartDamage, removeFromCart}}>
            {children}
        </FightCartContext.Provider>
    )
}