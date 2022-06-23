// import { useState } from "react";

export const Note = ({ _id = [], txHash = [], amount = [] }) =>
  // sourceOwnerAccount = []
  {
    // const walletAddress = sourceOwnerAccount;
    // const ourCoinWalletAddress = "FLpXKSjzWkAWWtTzQgvaKZpjVbZBLYLSzEoVTbTNmaKm";

    return (
      <li>
        <div>
          <p>{_id}</p>
          <p>{txHash}</p>

          {/* {walletAddress === ourCoinWalletAddress ? "I received" : "I voted"}  */}
          <p>{amount / 1000000000} Canar</p>
        </div>
      </li>
    );
  };
