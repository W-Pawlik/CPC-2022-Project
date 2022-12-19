import { Col, Row } from "react-bootstrap"
import { FightItem } from "../components/FightItem"
import fightItems from "../data/items.json"


export function Fight() {
    return (
        <>
            <Row md={1} xs={1} lg={1} className="g-3">
                {fightItems.map(item => (
                    <Col key={item.id}>
                        <FightItem {...item} />
                    </Col>
                ))}
            </Row>
        </>
    )
}