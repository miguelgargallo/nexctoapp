import { useEffect, useState } from "react";

export const Note = ({
  _id = [],
  txHash = [],
  amount = [],
  sourceOwnerAccount = []
}) => {
  const [tokenText, setTokenText] = useState("");
  const ourCoinWalletAddress = "FLpXKSjzWkAWWtTzQgvaKZpjVbZBLYLSzEoVTbTNmaKm";
  console.log("wallet adress", sourceOwnerAccount);

  useEffect(() => {
    if (sourceOwnerAccount === ourCoinWalletAddress)
      setTokenText("I received: ");
    else setTokenText("I voted with: ");
  }, []);

  return (
    <li>
      <div>
        <p>{_id}</p>
        <p>{txHash}</p>
        <p>
          {tokenText}
          {amount / 1000000000} Canar
        </p>
      </div>
    </li>
  );
};
