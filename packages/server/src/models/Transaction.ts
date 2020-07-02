import { Column, Entity } from "typeorm";
import { Base } from "./Base";
import { BankTypeEnum } from "./ReceiverList";

@Entity({
    name: "transaction",
})
export class Transaction extends Base<Transaction> {
    @Column()
    note: string;

    @Column()
    sourceAccount: string;

    @Column()
    desAccount: string;

    @Column()
    amount: number;

    @Column({ type: "enum", enum: BankTypeEnum })
    bankType: BankTypeEnum;

    @Column()
    isDebtPay: boolean;

    @Column()
    isRemitterCharge: boolean;

    @Column({ nullable: true })
    isMyBankSend: boolean;
}
