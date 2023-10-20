import { Dispatch, SetStateAction, useState } from "react";
import { AbiParameter } from "abitype";
import type { NextPage } from "next";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { InputBase, IntegerInput } from "~~/components/scaffold-eth";

type ContractInputProps = {
  setForm: Dispatch<SetStateAction<Record<string, any>>>;
  form: Record<string, any> | undefined;
  stateObjectKey: string;
  paramType: AbiParameter;
};

const Create: NextPage = () => {
  const [message, setMessage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string | bigint>("");
  const [amount, setAmount] = useState<string | bigint>("");
  const [tokenid, setTokenId] = useState<string | bigint>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isNFT, setIsNFT] = useState(false); // Toggle state

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-opacity-80 bg-white backdrop-blur-md rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">Create Envelop</h1>
      <div className="mb-4 p-4 bg-opacity-90 bg-gray-100 rounded-lg shadow-md">
        <div  className="mb-2 p-2 w-full">
        <InputBase
          name="name"
          placeholder="Name"
          value={name}
          onChange={setName}
         
        />
        </div>
        <div className="mb-2 p-2 w-full">
        <InputBase
          name="message"
          placeholder="Message"
          value={message}
          onChange={setMessage}
        />
        </div>
        <div className="mb-2 p-2 w-full">
          <label className="mb-1 block font-semibold">Select Type:</label>
          <select
            value={isNFT ? "NFT" : "Token"}
            onChange={(e) => setIsNFT(e.target.value === "NFT")}
            className="w-full p-2 rounded border border-gray-300"
          >
            <option value="Token">Token</option>
            <option value="NFT">NFT</option>
          </select>
        </div>
        {!isNFT && (
          <div className="mb-2 p-2 w-full">
            <IntegerInput
              value={amount}
              onChange={(updatedTxValue) => {
                setAmount(updatedTxValue);
              }}
              placeholder="Value (wei)"
            />
          </div>
        )}
        {!isNFT && (
          <div className="mb-2 p-2 w-full">
            <IntegerInput
              value={number}
              onChange={(updatedTxValue) => {
                setNumber(updatedTxValue);
              }}
              placeholder="Number of Users"
            />
          </div>
        )}
        {!isNFT && (
          <div className="mb-2 p-2 w-full">
            <IntegerInput
              value={tokenid}
              onChange={(updatedTxValue) => {
                setTokenId(updatedTxValue);
              }}
              placeholder="Token ID"
            />
          </div>
        )}
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          minDate={new Date()} // Disallow past dates
          placeholderText="Select a future date"
          className="mb-2 p-2 w-full"
        />
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full">
        Create
      </button>
    </div>
  );
};

export default Create;
