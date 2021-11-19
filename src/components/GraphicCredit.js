import React from 'react'
import { LineChart, CartesianGrid, XAxis, Tooltip, Legend, Line, YAxis } from 'recharts'

export const ChartCredit = ({ data }) => {

   console.log(data)
   return (
      <LineChart width={730} height={250} data={data}
         margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
         <CartesianGrid strokeDasharray="5 5" />
         <XAxis dataKey="name" />
         <YAxis dataKey="everyMouthPayment" />
         <Tooltip />
         <Legend />
         <Line type="monotone" dataKey="parcents" stroke="#8884d8" />
         <Line type="monotone" dataKey="payments" stroke="#82ca9d" />
         <Line type="monotone" dataKey="everyMouthPayment" stroke="#82ca35" />
         <Line type="monotone" dataKey="mainDebt" stroke="#8484d8" />
      </LineChart>)
}