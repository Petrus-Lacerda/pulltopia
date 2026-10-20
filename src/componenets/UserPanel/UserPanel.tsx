import { useAppSelector } from "../../store/hooks"
import "./UserPanel.scss"

import { Coins, Package } from 'lucide-react'

const UserPanel = () => {
    return (
        <div className="UserPanel">
            <div className="packs-owned">
                <p>{useAppSelector(state => state.packs.packs)}</p>
                <Package size={18} aria-hidden="true" />
            </div>
            <div className="user-wallet">
                <p>{useAppSelector(state => state.wallet.balance)}</p>
                <Coins size={18} aria-hidden="true" />
            </div>
        </div>
    )
}

export default UserPanel