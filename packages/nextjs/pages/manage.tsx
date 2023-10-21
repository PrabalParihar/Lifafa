import type { NextPage } from "next";
import { ContractReadMethods } from "~~/components/scaffold-eth/Contract/ContractReadMethods";
import { useContractRead } from "wagmi";
import {abi} from "../RedEnvelope.json";
const Manage: NextPage = () => {

const { data, isError, isLoading } = useContractRead({
  address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
  abi: abi,
  functionName: 'getMyEnvelopes',
})


  
  return <>Manage</>;   
};

export default Manage;
