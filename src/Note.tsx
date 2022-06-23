import { useEffect, useState } from "react";

interface NoteProps {
  title: string;
  noteInfo: any;
}

export const Note = (props: NoteProps) => {
  const [tokenText, setTokenText] = useState("");
  // const walletAddress = sourceOwnerAccount.toString();
  const walletAddress = props.noteInfo.sourceOwnerAccount;
  const ourCoinWalletAddress = "FLpXKSjzWkAWWtTzQgvaKZpjVbZBLYLSzEoVTbTNmaKm";

  useEffect(() => {
    if (props.title === "User") {
      if (walletAddress === ourCoinWalletAddress) setTokenText("I received: ");
      else setTokenText("I voted with: ");
    }

    if (props.title === "Project") {
      setTokenText("I received: ");
    }
  }, [props.title, walletAddress]);

  return (
    <li>
      {
        <div>
          <p>Transaction</p>

          {/* <p>{props.noteInfo._id}</p> */}
          <p>owner acccount : {props.noteInfo.sourceOwnerAccount}</p>
          <p>destination acccount : {props.noteInfo.destOwnerAccount}</p>

          {/* <p>{props.noteInfo.txHash}</p> */}
          <p>
            {tokenText}
            {props.noteInfo.amount / 1000000000} Canar
          </p>
        </div>
      }
    </li>
  );
};
