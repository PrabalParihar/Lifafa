import type { NextPage } from "next";
import { ContractReadMethods } from "~~/components/scaffold-eth/Contract/ContractReadMethods";
import { useContractRead } from "wagmi";
import {abi} from "../RedEnvelope.json";
const Manage: NextPage = () => {

const { data, isError, isLoading } = useContractRead({
  address: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
  abi: abi,
  functionName: 'getMyEnvelopes',
})

const envelopdata = data;

  
  return (
    <>
    <div>data</div>
    
    </>
  )
};

export default Manage;
