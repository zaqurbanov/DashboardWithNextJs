import React from "react";
import GenerateTableHeader from "../../shared/GenerateTableHeader";
import { transactionTableHeader } from "@/constants/TransactionsTableHeader";
import { getTransactions } from "@/services/transaction.services";
import TransactionTableBody from "./TransactionTableBody";

const Transaction = async() => {
    const data = await getTransactions()
  return (
    <div className="bg-container neu-flat p-10 mt-5 flex  flex-col gap-5">
      <div>
        <h2 className="text-2xl neu-inset text-blue-500 p-2 rounded-xl">Latest Transactions</h2>
      </div>
      <div className=" max-h-96 overflow-y-auto custom-scroll">
        <div className="">


      <table  className="w-full border-collapse   border-gray-200 " >
        <thead className="  ">
          <tr className=" ">
            <GenerateTableHeader headers={transactionTableHeader} />
          </tr>
        </thead>
        <tbody className="">
          {
            data.map((item,index)=>{
              return (
                <tr key={item.id} className=" rounded-xl">
                  <TransactionTableBody item={item}  />
                </tr>
              )
            })
          }
        </tbody>
      </table>
        </div>

      </div>
    </div>
  );
};

export default Transaction;
