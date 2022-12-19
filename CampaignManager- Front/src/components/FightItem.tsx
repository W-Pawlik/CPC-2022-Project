import { useState } from "react"
import { Button, Card } from "react-bootstrap"
import { useFightCart } from "../context/FightCartContext"
import "../Styles/Fightitem.css"

type FightItemProps = {
    id: number,
    name: string,
    hp: number
}


export function FightItem({ id, name }:
    FightItemProps) {
        const { getItemDamage, increaseCartDamage, decreaseCartDamage, removeFromCart} = useFightCart()
    const damage = getItemDamage(id)
        const [fullHp, setFullHp] = useState(0);
        let currentHp = fullHp-damage;
        
        const [checked1, setChecked1] = useState(false);
        
        const hadnleChange1 = () => {
            setChecked1(!checked1);
        }
        const [checked2, setChecked2] = useState(false);
        
        const hadnleChange2 = () => {
            setChecked2(!checked2);
        }
        const [checked3, setChecked3] = useState(false);
        
        const hadnleChange3 = () => {
            setChecked3(!checked3);
        }

    return (
        <Card className="h-100 bg-dark">
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between algin-items-baseline mb-4">
                    <span className="fs-2">{name}</span>
                    <span>Set FullHp:
                    <input type="number" onChange={(e) => setFullHp(e.target.value)}
                    value={fullHp}/></span>
                    <span className="fs-2 text-muted">Full Hp:{fullHp}</span>
                    <span className="fs-2 text-muted">Current Hp:{currentHp}</span>
                    {currentHp < 0 ? (
                        <div className="death_saving_throws">
                            Failed Saving Throws:
                        <input className="checkBox" type="checkbox" checked={checked1} onChange={hadnleChange1}/>
                        <input className="checkBox" type="checkbox" checked={checked2} onChange={hadnleChange2}/>
                        <input className="checkBox" type="checkbox" checked={checked3} onChange={hadnleChange3}/>
                        {checked1 && checked2 && checked3 === true ? (
                            <div>DEAD</div>
                        ) : (
                            <div></div>
                        )}
                        </div>
                    ) : (
                        <span>Alive</span>
                    )}
                </Card.Title>
                <div className="mt-auto">
                    {damage === 0 ? (
                        <Button className="w-100 bg-dark" onClick={() => increaseCartDamage(id)}>+ Add Damage</Button>
                    ) : (
                        <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                            <div className="d-flex alighn-items-center justify-content-center" style={{ gap: ".5rem" }}>
                                <Button className="bg-dark" onClick={() => decreaseCartDamage(id)}>-</Button>
                                <div>
                                    <span className="fs-3">{damage} </span>
                                    Damage Taken
                                </div>
                                <Button className="bg-dark" onClick={() => increaseCartDamage(id)}>+</Button>
                            </div>
                            <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>
                                Clear Damage
                            </Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    )
}